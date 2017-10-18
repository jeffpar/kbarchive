---
layout: page
title: "Q80261: PC Gen: Contents of Modem Script File NULLMODM.MDM"
permalink: kb/080/Q80261/
---

## Q80261: PC Gen: Contents of Modem Script File NULLMODM.MDM

	Article: Q80261
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 2.1e 
	-------------------------------------------------------------------------------
	
	The following is the contents of the Microsoft Mail version 2.1e
	modem script file NULLMODM.MDM, which can be compiled with
	SCRCOMP.EXE:
	
	  ;*********************************************************************
	  ;
	  ;                    Microsoft Mail Script File
	  ;
	  ;       Filename: nullmodm.mdm
	  ;       Date    : March 21, 1990
	         Script  : Standard script file for null-modems
	  ;
	  ;     This script file contains the strings used in the calling
	  ;  sequence for null modem connections. Note that this used to be
	  ;  accomplished in version 1.0 and version 2.0 via the -Z option.
	  ;
	  ;     Note that a "proper" null modem is wired in the following way:
	  ;
	  ;                       1_____1
	  ;                       2__ __2
	  ;                       3__X__3
	  ;                       4__ __4
	  ;                       5__X__5
	  ;                       7_____7
	  ;                       6_____20
	  ;                       8_/ 
	  ;                      20_____6
	  ;                           \_8
	  ;
	  ;  If your null modem is not wired in this way then you could
	  ;  experience flow control problems and "lost carrier".
	  ;
	  ;     If your null modem connection is via a device which requires
	  ;  some setup strings to be issued to initialized the device then
	  ;  insert the appropriate "send" commands in the INITIALIZE procedure.
	  ;  If the device must be reset after a connection the insert the
	  ;  appropriate "send" commands in the RESET procedure.
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
	          title "Null Modem Script"
	
	          return 0
	
	  RESET:
	          return 0
	
	  CALL:
	          $ret = 8               ; set default ret code to "no answer"
	
	  ; If you previously used the -Z option with an optional setup string
	  ; then uncomment the following line and insert your setup string
	  ; between the double quote characters.
	  ;       eg. send "\17"         ; send XON
	  ;
	
	  ;       send ""
	
	          sendln "9"             ; send call signal to remote site
	
	          waitrsp 1              ; wait until the modem responds
	
	          if (response = "8^M")  ; has other side answered?
	            {
	            sendln "8"           ; if he has then send
	            display ">>> CONNECT - NULL MODEM <<<"
	            $ret = 12
	            }
	          else
	            {
	            display ">>> NO ANSWER <<<"
	            $ret = 8
	            }
	
	          return $ret            ; return connect baud rate to
	                                 ;    application
	
	  ANSWER:
	          $ret = 8               ; set default ret code to "no answer"
	
	          waitrsp 1              ; see if phone is ringing
	
	          if (response = "9^M")  ; 9 means "RING" for nullmodems
	              {
	              sendln "8"         ; answer the phone
	
	              waitrsp 20          ; wait for return code from modem
	
	              if (response = "8^M")
	                {
	                display ">>> CONNECT - NULL MODEM <<<"
	                $ret = 12
	                }
	              }
	
	          return $ret            ; return connect baud rate to
	                                 ;    application
	
	  DISCONNECT:
	          dtr 0                  ; drop DTR signal for a few seconds
	
	          clearrsp               ; clear the response buffer
	
	          wait 4                 ; give other side time to recognize
	                                 ;    lost carrier
	          dtr 1                  ; raise it back again
	          return 0
	
	Additional query words: 2.10 2.1 2.10e
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN210e
	Version           : WINDOWS:2.1e
	
	=============================================================================
	
