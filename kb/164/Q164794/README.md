---
layout: page
title: "Q164794: SNA Server Issues with DBCS Printing to an AS/400"
permalink: /kb/164/Q164794/
---

## Q164794: SNA Server Issues with DBCS Printing to an AS/400

	Article: Q164794
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	This article only applies to DBCS (double byte character set) code pages.
	DBCS code pages include all of the following:
	
	  290 Japanese (Katakana)
	  930 Japanese (Extend Katakana)
	  931 Japanese (English-lower)
	  933 Korean
	  935 Chinese (PRC)
	  937 Chinese (Taiwan)
	  939 Japanese (Extend English)
	
	1. Carriage Return (0x0D) Not Interpreted Correctly with 5250 Printing
	
	
	2. Print Server Doesn't Send Form Feed (FF) When NL or LF Is on Last Line
	
	
	3. Last Line Doesn't Print When Using SNA Server Print Server
	
	
	4. SNA Server Print Server Ignores the First LF and NL
	
	
	5. Problem with PrintPosition (AbsoluteHorizontalMove)
	
	
	6. Added Support for Thick Dotted Line, SHF, SPCC, and STO
	
	
	7. FF Command Is Not Positioned at Line-1 Column-1 of Next Page
	
	
	8. Application Exception in Snaprint.exe with STO
	
	
	SYMPTOMS
	========
	
	1. Carriage Return (0x0D) Not Interpreted Correctly with 5250 Printing
	
	  SYMPTOMS
	
	  Sending the following sequence to the 5250 Print Service (J version)
	
	  "AAAA"+CR+LF+"BBBB"+NL (interpreted to ASCII for clarity)
	
	  Will result in:
	
	  AAAA
	      BBBB
	
	  The expected result is:
	
	  AAAA
	  BBBB
	
	
	2. Print Server Doesn't Send Form Feed (FF) When NL or LF Is on Last Line
	
	  SYMPTOMS
	
	  When using the SNA Server Print Server (J version) to print to an AS/400, and
	  a new line (NL) or line feed (LF) character is on the last line of the
	  printable area, a form feed (FF) is not generated. Therefore, any remaining
	  printable text is not printed on the next page.
	
	
	3. Last Line Doesn't Print When Using SNA Server Print Server
	
	  SYMPTOMS
	
	  When using the SNA Server Print Server (J version) to print to an AS/400, the
	  last line may not print. The SNA Server Print Server (J version) does not
	  correctly flush the write buffer for an end-of-page.
	
	
	4. SNA Server Print Server Ignores the First LF and NL
	
	  SYMPTOMS
	
	  SNA Server Print Server ignores the first line feed or new line it comes
	  across.
	
	
	5. Problem with PrintPosition (AbsoluteHorizontalMove)
	
	  SYMPTOMS
	
	  The following is a sample datastream (converted to ASCII for ease of
	  readability):
	
	  "AAAAA"+LF+PP(AHM 3)+"BBBB"+NL
	
	  The expected result is:
	
	  AAAAA
	     BBBBB
	
	  The actual result is:
	
	  AAAAA
	
	  ("BBBB" was not printed.)
	
	
	6. Added Support for Thick Dotted Line, SHF, SPCC, and STO
	
	  SUMMARY
	
	  The following features have been added to DBCS printing in the SNA Server 3.0
	  J version:
	
	   - Support for Thick Dotted Line.
	
	   - Support for the Set Horizontal Format (SHF) SCS command to support Max
	     Print Position (MPP).
	
	   - Support for the Set Presentation of Control Character (SPCC) command, to
	     support the presentation of control characters (SI/SO).
	
	   - Support for the Set Text Orientation (STO) command, to rotate a DBCS
	     character.
	
	  These changes were made to the DBCS environment, and do not include SBCS.
	
	
	7. FF Command Is Not Positioned at Line-1 Column-1 of Next Page
	
	  SYMPTOMS
	
	  The following is a sample datastream:
	
	  Sent data:
	
	  "12345" (NL) "67890" (FF) "ABCDE"
	  (NL:New Line)
	
	  The following is the result:
	
	  <Page 1>
	  12345 <line 1>
	  67890 <line 2>
	
	  <Page 2>
	    <line 1>
	      ABCDE   <line 2>
	
	  Notice the ABCDE is indented to the right; it should be left justified.
	
	
	8. Application Exception in Snaprint.exe with STO
	
	  SYMPTOMS
	
	  When printing to an AS/400 using SNA Server 3.0 Print Server and selecting a
	  DBCS character set, a general protection fault (GPF) occurs if you send a
	  print job with STO in its datastream.
	
	  The GPF is in the following function:
	
	  WinVPRTSetTextOrientation within SNAPrint.exe.
	
	  The following is the assembler call:
	
	  cmp     byte ptr [edx],0x40          ds:00000000=??
	
	
	
	RESOLUTION
	==========
	
	To resolve these problems, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
