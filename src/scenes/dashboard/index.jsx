import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { AirOutlined, Circle, DocumentScanner, HeartBroken, Image, MedicalInformation, PinDrop, RectangleRounded, Stream, Tag } from "@mui/icons-material";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box m="20px">

        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          // gridAutoRows="auto"
          // gridAutoRows="320px"
          gridAutoRows="21.9rem"
          gap="5px"
        >


          {/* ROW 0 */}
          <Box
            gridColumn="span 2"
            gridRow="span 2"
            pr={1}
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography mb={0} variant="h5" fontWeight="600" >
                Patient Info
              </Typography>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              pb="20px"
              overflow="auto"
            >



              <Box
                gridColumn="span 4"
                gridRow="span 2"
                paddingX={1.2}
                paddingY={.9}

                backgroundColor={colors.primary[400]}
              >

                <Typography
                  variant="h6"
                  display="flex"
                  color={colors.greenAccent[300]}
                >
                  Schedule N°
                </Typography>

                <Typography
                  variant="h5"
                  display="flex"
                  pb={0.5}
                  borderBottom={`2px solid ${colors.grey[100]}`}
                  color={colors.grey[100]}
                >80548965489
                </Typography>
              </Box>

              <Box
                gridColumn="span 4"
                gridRow="span 2"
                paddingX={1.2}
                paddingY={.9}

                backgroundColor={colors.primary[400]}
              >

                <Typography
                  variant="h6"
                  display="flex"
                  color={colors.greenAccent[300]}
                >
                  Chart N°
                </Typography>

                <Typography
                  variant="h5"
                  display="flex"
                  pb={0.5}
                  borderBottom={`2px solid ${colors.grey[100]}`}
                  color={colors.grey[100]}
                >T548965489
                </Typography>
              </Box>


              <Box
                gridColumn="span 4"
                gridRow="span 2"
                paddingX={1.2}
                paddingY={.9}

                backgroundColor={colors.primary[400]}
              >

                <Typography
                  variant="h6"
                  display="flex"
                  color={colors.greenAccent[300]}
                >
                  Gender
                </Typography>

                <Typography
                  variant="h5"
                  display="flex"
                  pb={0.5}
                  borderBottom={`2px solid ${colors.grey[100]}`}
                  color={colors.grey[100]}
                >Male
                </Typography>
              </Box>



              <Box
                gridColumn="span 4"
                gridRow="span 2"
                paddingX={1.2}
                paddingY={.9}

                backgroundColor={colors.primary[400]}
              >

                <Typography
                  variant="h6"
                  display="flex"
                  color={colors.greenAccent[300]}
                >
                  Date of Birth
                </Typography>

                <Typography
                  variant="h5"
                  display="flex"
                  pb={0.5}
                  borderBottom={`2px solid ${colors.grey[100]}`}
                  color={colors.grey[100]}
                >01-01-1989
                </Typography>
              </Box>



              <Box
                gridColumn="span 4"
                gridRow="span 2"
                paddingX={1.2}
                paddingY={.9}

                backgroundColor={colors.primary[400]}
              >

                <Typography
                  variant="h6"
                  display="flex"
                  color={colors.greenAccent[300]}
                >
                  Surgeon
                </Typography>

                <Typography
                  variant="h5"
                  display="flex"
                  pb={0.5}
                  borderBottom={`2px solid ${colors.grey[100]}`}
                  color={colors.grey[100]}
                >Huei-wen, Wang
                </Typography>
              </Box>



              <Box
                gridColumn="span 4"
                gridRow="span 2"
                paddingX={1.2}
                paddingY={.9}

                backgroundColor={colors.primary[400]}
              >

                <Typography
                  variant="h6"
                  display="flex"
                  color={colors.greenAccent[300]}
                >
                  Name of Surgery
                </Typography>

                <Typography
                  variant="h5"
                  display="flex"
                  pb={0.5}
                  borderBottom={`2px solid ${colors.grey[100]}`}
                  color={colors.grey[100]}
                >Colo, Ca
                </Typography>
              </Box>
            </Box>

            <Box
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              borderRadius="4px"
            >

              <Box
                backgroundColor={colors.primary[400]}
                p="5px 3px"
                border={`1px solid ${colors.greenAccent[500]}`}
                borderRadius="4px"
              >
                <Button>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems={"center"}
                    color={colors.greenAccent[300]}
                  >
                    <DocumentScanner
                      sx={{ fontSize: "19px", marginRight: "0.21rem", color: colors.greenAccent[500] }}
                    />
                    Personal Profile

                  </Typography>
                </Button>
              </Box>
            </Box>

            <Box
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              borderRadius="4px"
            >

              <Box
                backgroundColor={colors.primary[400]}
                p="5px 3px"
                border={`1px solid ${colors.greenAccent[500]}`}
                borderRadius="4px"
              >
                <Button>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems={"center"}
                    color={colors.greenAccent[300]}
                  >
                    <Stream
                      sx={{ fontSize: "19px", marginRight: "0.21rem", color: colors.greenAccent[500] }}
                    />
                    Streaming

                  </Typography>
                </Button>
              </Box>
            </Box>


            <Box
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              borderRadius="4px"
            >

              <Box
                backgroundColor={colors.primary[400]}
                p="5px 3px"
                border={`1px solid ${colors.greenAccent[500]}`}
                borderRadius="4px"
              >
                <Button>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems={"center"}
                    color={colors.greenAccent[300]}
                  >
                    <Image
                      sx={{ fontSize: "19px", marginRight: "0.21rem", color: colors.greenAccent[500] }}
                    />
                    ScreenShot

                  </Typography>
                </Button>
              </Box>
            </Box>



            <Box
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              borderRadius="4px"
            >

              <Box
                backgroundColor={colors.primary[400]}
                p="5px 3px"
                border={`1px solid ${colors.greenAccent[500]}`}
                borderRadius="4px"
              >
                <Button>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems={"center"}
                    color={colors.greenAccent[300]}
                  >
                    <PinDrop
                      sx={{ fontSize: "19px", marginRight: "0.21rem", color: colors.greenAccent[500] }}
                    />
                    OP Tag

                  </Typography>
                </Button>
              </Box>
            </Box>


            <Box
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              borderRadius="4px"
            >

              <Box
                backgroundColor={colors.primary[400]}
                p="5px 3px"
                border={`1px solid ${colors.greenAccent[500]}`}
                borderRadius="4px"
              >
                <Button>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems={"center"}
                    color={colors.greenAccent[300]}
                  >
                    <MedicalInformation
                      sx={{ fontSize: "19px", marginRight: "0.21rem", color: colors.greenAccent[500] }}
                    />
                    Medication Tag

                  </Typography>
                </Button>
              </Box>
            </Box>


            <Box
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              borderRadius="4px"
            >

              <Box
                backgroundColor={colors.primary[400]}
                p="5px 3px"
                border={`1px solid ${colors.greenAccent[500]}`}
                borderRadius="4px"
              >
                <Button>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems={"center"}
                    color={colors.greenAccent[300]}
                  >
                    <Tag
                      sx={{ fontSize: "19px", marginRight: "0.21rem", color: colors.greenAccent[500] }}
                    />
                    Tag

                  </Typography>
                </Button>
              </Box>
            </Box>

            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[500]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              style={{
                height: "100px"
              }}
            />
          </Box>

          {/* ROW 1 */}
          <Box
            gridColumn="span 7"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Endoscopy Image
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  Duodenum Second Portion
                </Typography>
              </Box>
              {/* <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box> */}
            </Box>
            <Box
              style={{ padding: 25 }}
            // height="560px"
            // m="-20px 0 0 0"
            >
              <img
                alt="profile-user"
                // width="420rem"
                height="500rem"
                src={`../../assets/endoscopy.jpg`}
                style={{
                  width: "100%",
                  // height:"33rem",
                  // height:"95%",
                  cursor: "pointer",
                  // borderRadius: "50%",
                  // border: "2px solid "
                }}
              />
            </Box>
            {/* <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[500]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              style={{
                height: "100px"
              }}
            /> */}
          </Box>


          {/* ROW 2 */}
          <Box
            gridColumn="span 3"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography variant="h5" fontWeight="600" >
                Vital Signs Measurments
              </Typography>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              pb="30px"
              overflow="auto"
            >
              <Box
                display="flex"
                flexDirection="column"
              // alignItems="center"
              // justifyContent="center"
              >
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(8, 1fr)"
                  gap="5px"
                  paddingX={2}
                >
                  <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                  // overflow="auto"
                  >

                    <Typography
                      variant="h5"
                      display="flex"
                      color={colors.greenAccent[500]}
                      sx={{ mt: "9px" }}

                    >
                      <HeartBroken
                        sx={{ fontSize: "19px", marginRight: "0.31rem", color: colors.greenAccent[500] }}
                      />
                      Heart
                    </Typography>
                    <Typography
                      display="flex"
                    >
                      <Typography
                        variant="h1"
                        display="flex"
                        color={colors.redAccent[500]}
                        sx={{
                          mt: "1px",
                          // fontSize:55, 
                          fontWeight: "bold"
                        }}
                      >80
                        <Typography
                          variant="h5"
                          color={colors.greenAccent[500]}
                          sx={{ mt: "9px" }}

                        >bpm</Typography>
                      </Typography>
                    </Typography>

                  </Box>


                  <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                  // overflow="auto"
                  >

                    <Typography
                      variant="h5"
                      display="flex"
                      color={colors.greenAccent[500]}
                      sx={{ mt: "9px" }}

                    >
                      <AirOutlined
                        sx={{ fontSize: "19px", marginRight: "0.31rem", color: colors.greenAccent[500] }}
                      />
                      SpO2
                    </Typography>
                    <Typography
                      display="flex"
                    >
                      <Typography
                        variant="h1"
                        display="flex"
                        color={colors.redAccent[500]}
                        sx={{
                          mt: "1px",
                          // fontSize:55, 
                          fontWeight: "bold"
                        }}
                      >98%
                      </Typography>
                    </Typography>

                  </Box>

                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography variant="h5" fontWeight="600" >
                MRI & X-Ray
              </Typography>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
            // mb="30px"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                // mt="25px"
                mb="0px"
              // marginX="5px"
              >
                <img
                  alt="MRI"
                  // width="330rem"
                  height="230rem"

                  src={`../../assets/mri1.jpeg`}
                  style={{
                    cursor: "pointer",
                    width: "100%"
                  }}
                />

              </Box>
            </Box>

            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              borderBottom={`7px solid ${colors.primary[500]}`}
            // mb="30px"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                // mt="25px"
                mb="0px"
              // marginX="5px"
              >
                <img
                  alt="camera"
                  height="230rem"

                  src={`../../assets/camera.jpg`}
                  style={{
                    cursor: "pointer",
                    width: "100%"
                  }}
                />

              </Box>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[500]}
              borderBottom={`7px solid ${colors.primary[500]}`}
              style={{
                height: "100px"
              }}
            />


            {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Measurments
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))} */}


          </Box>




          
        </Box>

        <Box
            gridColumn="span 12"
            gridRow="span 10"
            position="absolute"
            // gridAutoRows="50px"
            backgroundColor={colors.primary[400]}
            overflow="hidden"
            paddingY={2}
            paddingX={2}
            paddingBottom={5}
            style={{
              bottom: -0,
              zIndex: 9,
              height: "100px",
              // width: "89vw",
              width: "92%",
              // flex:1,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"

            >
              <Box>

                <Typography mb={1} variant="h4" fontWeight="600" >
                  Start time
                </Typography>
                <Typography mb={0} variant="h5" fontWeight="600" >
                  09:51:55
                </Typography>
              </Box>

              <Box
                p="5px 5px"
                backgroundColor={colors.greenAccent[400]}
                borderRadius="4px"
                marginX={1}
                // height={1}
                paddingX={3}
                sx={{
                  flex: 1,
                  marginRight: 3,
                  marginLeft: 3,
                  height: "0.1rem",

                  // width:"100%",
                }}

              />

              <Box>

                <Typography mb={1} variant="h4" fontWeight="600" >
                  End time
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"

                >
                  <Box
                    p="5px 5px"
                    border={`1px solid ${colors.redAccent[500]}`}
                    borderRadius="4px"
                    marginX={1}

                  >

                    <Button>
                      <Circle
                        sx={{ fontSize: "19px", color: colors.redAccent[500] }}
                      />
                    </Button>
                  </Box>
                  <Box
                    p="5px 5px"
                    border={`1px solid ${colors.greenAccent[500]}`}
                    borderRadius="4px"
                    marginX={1}

                  >

                    <Button>
                      <RectangleRounded
                        sx={{ fontSize: "19px", color: colors.greenAccent[500] }}
                      />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>


            </Box>

          </Box>




      </Box>
    </>
  );
};

export default Dashboard;
