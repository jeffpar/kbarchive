---
layout: page
title: "Q80263: PC Gen: Contents of Modem Script File TELEBIT.MDM"
permalink: kb/080/Q80263/
---

## Q80263: PC Gen: Contents of Modem Script File TELEBIT.MDM

	Article: Q80263
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 2.1e 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the contents of the Microsoft Mail version 2.1e modem script
	file TELEBIT.MDM, which can be compiled with SCRCOMP.EXE:
	
	  ;*********************************************************************
	  ;
	  ;                    Microsoft Mail Script File
	  ;
	  ;       Filename: telebit.mdm
	  ;       Date    : Oct 26, 1990
	  ;       Script  : Standard script file for Telebit TrailBlazer modems
	  ;       History : Oct 26, 1990 - added support for T2500 model
	  ;
	  ;     This script file contains the standard modem setup strings used
	  ;  by the External, Transmit and Listen programs. There are five
	  ;  procedures defined in this script file for setting up the modem and
	  ;  for connecting to a remote External machine.
	  ;
	  ;     This script file is automatically invoked by using the -T
	  ;  command line option.
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
	          title "Telebit TrailBlazer Script"
	
	          baud 9600              ; set the baud rate
	          display "   Baud Rate : 9600"
	          $attempts = 5
	
	  init_retry:
	          sendln "ATZ"           ; reset modem to default settings
	          wait 2
	          waitrsp 1
	
	          if ("0" isin response)
	              goto reset_okay
	
	          if ("OK" isin response)
	              {
	  reset_okay:
	              sendln "AT&FE0M1V0"
	              wait 1
	              waitrsp 1
	
	              if ("0^M" isin response)
	                  {
	                  sendln "ATS0=0S7=45S9=6S10=50S12=50"
	                  sendln "ATS52=1S53=1S58=2S61=20S66=1&W"
	                  waitrsp 1
	                  if (response = "0^M")
	                      return 0
	                  }
	               }
	          dec $attempts
	          if ($attempts > 0)
	                  goto init_retry
	
	          return 4
	
	  RESET:
	          baud 9600              ; set the baud rate
	          display "   Baud Rate : 9600"
	
	          sendln "ATZ"           ; reset modem to default settings
	          waitrsp 1
	
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
	
	  ring_loop:
	          waitrsp 120            ; wait until the modem responds
	
	          if (response = "1^M")
	            {
	            display ">>> CONNECT 300 <<<"
	            $ret = 1
	            }
	          else if (response = "3^M")
	            {
	            display ">>> NO CARRIER <<<"
	            $ret = 8             ; no answer or no connect
	            }
	          else if (response = "5^M")
	            {
	            display ">>> CONNECT 1200 <<<"
	            $ret = 5
	            }
	          else if (response = "7^M")
	            {
	            display ">>> BUSY <<<"
	            $ret = 7             ; busy
	            }
	          else if (response = "10^M")
	            {
	            display ">>> CONNECT 2400 <<<"
	            $ret = 10
	            }
	          else if (response = "12^M")
	            {
	            display ">>> CONNECT 9600 <<<"
	            $ret = 12
	            }
	          else if (response = "50^M")
	            {
	            display ">>> CONNECT FAST <<<"
	            $ret = 12
	            }
	          else if (response = "52^M")
	            {
	            $ret = 52
	            }
	
	          if ($ret = 52)         ; check for remote ring code, and
	                                 ;    ignore
	            goto ring_loop
	
	          return $ret            ; return connect baud rate to
	                                 ;    application
	
	  ANSWER:
	          $ret = 8               ; set default ret code to "no answer"
	
	          waitrsp 1              ; see if phone is ringing
	
	          if (response = "2^M")    ; 2 is numeric form of "RING"
	              {
	              if (listen = 1)    ; see if Listen program is running or
	                  sendln "ATD"   ; not answer phone in originate mode
	                                 ;    (Listen)
	              else
	                  sendln "ATA"   ; answer the phone normally
	
	              waitrsp 120            ; wait until the modem responds
	
	              if (response = "1^M")
	                  {
	                  display ">>> CONNECT 300 <<<"
	                  $ret = 1
	                  }
	              else if (response = "3^M")
	                  {
	                  display ">>> NO CARRIER <<<"
	                  $ret = 8             ; no answer or no connect
	                  }
	              else if (response = "5^M")
	                  {
	                  display ">>> CONNECT 1200 <<<"
	                  $ret = 5
	                  }
	              else if (response = "10^M")
	                  {
	                  display ">>> CONNECT 2400 <<<"
	                  $ret = 10
	                  }
	              else if (response = "12^M")
	                  {
	                  display ">>> CONNECT 9600 <<<"
	                  $ret = 12
	                  }
	              else if (response = "50^M")
	                  {
	                  display ">>> CONNECT FAST <<<"
	                  $ret = 12
	                  }
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
	
	          waitrsp 1              ; wait for a response
	
	          clearrsp               ; clear response buffer
	
	          return 0               ; always return OK
	
	Additional query words: 2.10 2.1 2.10e
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN210e
	Version           : WINDOWS:2.1e
	
	=============================================================================
	
