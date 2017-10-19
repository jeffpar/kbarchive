---
layout: page
title: "Q80260: PC Gen: Contents of Modem Script File MULTITEC.MDM"
permalink: /kb/080/Q80260/
---

## Q80260: PC Gen: Contents of Modem Script File MULTITEC.MDM

	Article: Q80260
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 2.1e 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the contents of the Microsoft Mail version 2.1e modem script
	file MULTITEC.MDM, which can be compiled with SCRCOMP.EXE:
	
	  ;*********************************************************************
	  ;
	  ;                    Microsoft Mail Script File
	  ;
	  ;       Filename: multitec.mdm
	  ;       Date    : Oct 4, 1990
	  ;       Script  : Standard script file for Multitech MultiModem
	  ;
	  ;     This modem has an 4-Position DIP-Switch and a 8-Position
	  ;  DIP-Switch. These should be set as follows:
	  ;
	  ;            1  2  3  4              1  2  3  4  5  6  7  8
	  ;       ON      X               ON   X  X     X     X  X
	  ;       OFF  X     X  X         OFF        X     X        X
	  ;
	  ;
	  ;     Since this script file is set up as a generic script file for
	  ;  Multitech modems, users of the MultiModemV32 will want to increase
	  ;  the baud rate if running External on a 286 class machine (or
	  ;  higher). To do this, change the 3 lines in the INITIALIZE script
	  ;  which contain the number "9600" to "19200".
	  ;
	  ;     This script file contains the standard modem setup strings used
	  ;  by the External, Transmit and Listen programs. There are five
	  ;  procedures defined in this script file for setting up the modem and
	  ;  for connecting to a remote External machine.
	  ;
	  ;     The modem setup strings used here will be adequate for most
	  ;  people but there may be some changes required if you are dialing
	  ;  overseas and require a longer wait for Carrier Detect (S7 register)
	  ;  or if you wish to change the speaker volume. Note that if you used
	  ;  the -Innn option in version 1.0 or 2.0 that you will have to modify
	  ;  the S7 register and recompile this script file.
	  ;
	  ;     Consult your modem manual for more information on setup options.
	  ;
	  ;  Script procedures defined:
	  ;       INITIALIZE
	  ;       RESET
	  ;       CALL
	  ;       ANSWER
	  ;       DISCONNECT
	  ;
	  ;  Return codes for External, Transmit, Listen:
	  ;       0  - OK
	  ;       1  - CONNECT 300
	  ;       2  - not defined
	  ;       3  - NO CARRIER
	  ;       4  - ERROR
	  ;       5  - CONNECT 1200
	  ;       6  - not defined
	  ;       7  - BUSY
	  ;       8  - NO ANSWER
	  ;       9  - not defined
	  ;      10  - CONNECT 2400
	  ;      11  - not defined
	  ;      12  - CONNECT 9600 (high speed connection)
	  ;
	  ;
	  ;*********************************************************************
	
	  INITIALIZE:
	          title "Multitech MultiModem Script"
	
	  ; Change 9600 to 19200 for better throughput on V.32 model
	
	          baud 9600              ; set the baud rate
	          display "   Baud Rate : 9600"
	          $attempts = 5
	
	  init_retry:
	          sendln "AT&W1Z"           ; reset modem to default settings
	          wait 2
	          waitrsp 3
	
	          if ("0" isin response)
	              goto reset_okay
	
	          if ("OK" isin response)
	              {
	  reset_okay:
	
	  ; Change 9600 to 19200 for better throughput on V.32 model
	
	              sendln "AT&E1&E4&E13&E15$BA0$SB9600E0M1V0X3"
	              wait 2
	              waitrsp 3
	
	              if ("0^M" isin response)
	                  {
	                  sendln "ATS0=0S7=45S9=6S10=50S12=50&W0"
	                  waitrsp 3
	                  if (response = "0^M")
	                      return 0
	                  }
	               }
	          dec $attempts
	          if ($attempts > 0)
	                  goto init_retry
	
	          return 4
	
	  RESET:
	  ; Change 9600 to 19200 for better throughput on V.32 model
	
	          baud 9600              ; set the baud rate
	          display "   Baud Rate : 9600"
	
	          sendln "ATZ"           ; reset modem to default settings
	          waitrsp 3
	
	          if (response = "0^M")
	               return 0
	          else
	               return 4
	
	  CALL:
	          $ret = 8               ; set default ret code to "no answer"
	
	          clearrsp               ; clear the response buffer
	
	          echo 0                 ; do not display phone number
	
	          sendln "ATD" + dial_mode + phone_number  ; execute the dial up
	
	          echo 1                 ; turn echo back on
	
	          waitrsp 120            ; wait until the modem responds (max 2
	                                 ;    minutes)
	
	          if ("12" isin response)
	            {
	            display ">>> CONNECT 9600 <<<"
	            $ret = 12
	            }
	          else if ("11" isin response)
	            {
	            display ">>> CONNECT 4800 <<<"
	            $ret = 11
	            }
	          else if ("9" isin response)
	            {
	            display ">>> CONNECT 2400 <<<"
	            $ret = 10
	            }
	          else if ("7" isin response)
	            {
	            display ">>> BUSY <<<"
	            $ret = 7             ; busy
	            }
	          else if ("5" isin response)
	            {
	            display ">>> CONNECT 1200 <<<"
	            $ret = 5
	            }
	          else if ("3" isin response)
	            {
	            display ">>> NO CARRIER <<<"
	            $ret = 8             ; no answer or no connect
	            }
	          else if ("1" isin response)
	            {
	            display ">>> CONNECT 300 <<<"
	            $ret = 1
	            }
	
	          if ("R" isin response)
	            display ">>> MNP RELIABLE CONNECTION <<<"
	
	          if ("L" isin response)
	            display ">>> LAPM RELIABLE CONNECTION <<<"
	
	          if ("C" isin response)
	            display ">>> DATA COMPRESSION ENABLED <<<"
	
	          return $ret            ; return connect baud rate to
	                                 ;    application
	
	  ANSWER:
	          $ret = 8               ; set default ret code to "no answer"
	
	          waitrsp 1              ; see if phone is ringing
	
	          if (response = "2^M")  ; 2 is numeric form of "RING"
	              {
	              if (listen = 1)    ; see if Listen program is running or
	                  sendln "ATD"   ; not answer phone in originate mode
	                                 ;    (Listen)
	              else
	                  sendln "ATA"   ; answer the phone normally
	
	              waitrsp 120        ; wait for return code from modem (max
	                                 ;    2 minutes)
	
	              if ("12" isin response)
	                {
	                display ">>> CONNECT 9600 <<<"
	                $ret = 12
	                }
	              else if ("11" isin response)
	                {
	                display ">>> CONNECT 4800 <<<"
	                $ret = 11
	                }
	              else if ("9" isin response)
	                {
	                display ">>> CONNECT 2400 <<<"
	                $ret = 10
	                }
	              else if ("7" isin response)
	                {
	                display ">>> BUSY <<<"
	                $ret = 7             ; busy
	                }
	              else if ("5" isin response)
	                {
	                display ">>> CONNECT 1200 <<<"
	                $ret = 5
	                }
	              else if ("3" isin response)
	                {
	                display ">>> NO CARRIER <<<"
	                $ret = 8             ; no answer or no connect
	                }
	              else if ("1" isin response)
	                {
	                display ">>> CONNECT 300 <<<"
	                $ret = 1
	                }
	
	              if ("R" isin response)
	                display ">>> MNP RELIABLE CONNECTION <<<"
	
	              if ("L" isin response)
	                display ">>> LAPM RELIABLE CONNECTION <<<"
	
	              if ("C" isin response)
	                display ">>> DATA COMPRESSION ENABLED <<<"
	
	            }
	
	          return $ret            ; return connect baud rate to
	                                 ;    application
	
	  DISCONNECT:
	          wait 2                 ; wait 2 seconds
	
	          send "+++"             ; send escape sequence to put modem
	                                 ;    back to command state
	          wait 2                 ; wait 2 seconds
	
	          clearrsp               ; clear the response buffer
	
	          sendln "ATH0"          ; hang up the phone
	
	          waitrsp 3              ; wait for a response
	
	          if (response != "0^M") ; if hang up failed, drop DTR to force
	                                 ;    hang up
	              {
	              DTR 0              ; drop DTR to reset modem
	              wait 2             ; some modems require a delay here
	              DTR 1              ; raise DTR
	              clearrsp           ; clear response buffer
	              }
	
	          return 0               ; always return OK
	
	Additional query words: 2.10 2.1 2.10e
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN210e
	Version           : WINDOWS:2.1e
	
	=============================================================================
	
