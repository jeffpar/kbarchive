---
layout: page
title: "Q184886: CICS RE: CICS ABEND AZCE When LU 6.2 Message &gt; 32767 Bytes"
permalink: /kb/184/Q184886/
---

## Q184886: CICS RE: CICS ABEND AZCE When LU 6.2 Message &gt; 32767 Bytes

{% raw %}

	Article: Q184886
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an input, or output, LU 6.2 message is sent by a COMTI application that
	uses a CICS Remote Environment (non-link), a CICS ABEND AZCE results. The
	following error information is made available to the client program in the Err
	structure:
	
	  Error Number: 1410 (0x582)
	  Description: (1410) The transaction program xxxx abended. Host LU is aaaaaaaa
	  Local LU is bbbbbbbb. See NT Event Log for SNA Error Log Data. Retry the
	  request.
	
	The following entry is recorded in the application event log:
	
	  Event ID: 401
	  Source: COMTI
	  Type: Warning
	  Category: General
	
	(401) COM Transaction Integrator Received SNA-defined Error Log Data text:
	
	  DFHAC2206 15:32:27 WNWCI51C Transaction BOFE failed with abend AZCE.
	  Updates to local recoverable resources backed out.
	
	  EXPLANATION The host LU terminated the conversation with COM Transaction
	
	  Integrator abnormally, and sent information about the error. The message text
	  of the SNA Error Log GDS Variable is displayed above.
	
	CAUSE
	=====
	
	The explanation from the IBM Manual, CICS for MVS/ESA Messages and Codes Version
	4 Release 1 is as follows:
	
	AZCE
	
	Explanation: An intersystem error has been detected during APPC mapped
	processing. The length of application data that is to be received (as determined
	from the LL fields and concatenation flags) exceeds the CICS implementation
	limit of 32767 for receive and converse commands, or 65000 for CICS transaction
	routing and function shipping requests.
	
	COMTI uses a mapped LU 6.2 conversation, thus the 32,767-byte limit applies. It
	is a CICS limitation, not an SNA Server limitation or a COMTI limitation.
	
	WORKAROUND
	==========
	
	The only workaround is to limit the amount of data transmitted by the
	application to an amount acceptable to CICS, that is, <= 32,767 bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS version 1.00, a component of SNA Server version 4.00. This problem
	has been corrected in the latest U.S. service pack for SNA Server version 4.00.
	For information on obtaining the service pack, query on the ollowing word in the
	Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	After the service pack is installed, COMTI will send large messages in chunks of
	32,763 bytes. To accommodate this, the host application must continue to receive
	data until the change direction indicator is received, marking the end of the
	received data. The following excerpt from a host COBOL application illustrates
	how the data may be received, where CUR-STATE is used to monitor for the SEND
	state indicator:
	
	  
	
	     ID DIVISION.
	     PROGRAM-ID. BUG457X.
	     ENVIRONMENT DIVISION.
	     DATA DIVISION.
	     WORKING-STORAGE SECTION.
	     01  MISCELLANEOUS-VARIABLES.
	         05 DATA-POINTER         POINTER VALUE NULL.
	         05 DATA-RECEIVED        PIC S9(8) COMP VALUE 0.
	         05 SENT-SO-FAR          PIC S9(8) COMP VALUE 0.
	         05 SENT-AMT             PIC S9(8) COMP VALUE 0.
	         05 CUR-STATE            PIC S9(8) COMP VALUE 0.
	
	     01  ALIGNED-VARIABLES COMP SYNC.
	         05 MAXIMUM-LENGTH       PIC S9(8) VALUE ZERO.
	         05 ACTUAL-LENGTH        PIC S9(8) VALUE ZERO.
	         05 CMD-RESP             PIC S9(4) VALUE ZERO.
	
	     01  REPLY-DATA.
	         10 BYTES-RECEIVED       PIC ZZZ,ZZ9.
	         10 FILLER               PIC X VALUE SPACE.
	         10 FILLER               PIC X(15) VALUE
	            'BYTES RECEIVED.'.
	         10 FILLER               PIC X(32744) VALUE SPACES.
	
	     LINKAGE SECTION.
	     01  NONLINK-DATA            PIC X(32767).
	
	     PROCEDURE DIVISION.
	
	    *    RETRIEVE THE REQUEST DATA.
	    *    NEED TO ADD PERFORM LOOP TO EOD.
	         COMPUTE MAXIMUM-LENGTH = 32763.
	
	         PERFORM UNTIL CUR-STATE = DFHVALUE(SEND)
	             MOVE ZERO TO ACTUAL-LENGTH
	             EXEC CICS RECEIVE
	               SET(DATA-POINTER)
	               MAXFLENGTH(MAXIMUM-LENGTH)
	               FLENGTH(ACTUAL-LENGTH)
	               STATE(CUR-STATE)
	               NOTRUNCATE
	             END-EXEC
	
	             ADD ACTUAL-LENGTH TO DATA-RECEIVED
	         END-PERFORM.
	    [...]
	
	REFERENCES
	----------
	
	IBM Manual: CICS for MVS/ESA Messages and Codes Version 4 Release 1 Document
	Number GC33-1177-01.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
