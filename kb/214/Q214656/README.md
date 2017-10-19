---
layout: page
title: "Q214656: Absolute Horizontal Move Command Handled Incorrectly if PDT Used"
permalink: /kb/214/Q214656/
---

## Q214656: Absolute Horizontal Move Command Handled Incorrectly if PDT Used

	Article: Q214656
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AS/400 print jobs that contain the Absolute Horizontal Move SCS command will
	print with incorrect formatting if the AS/400 print session is configured to use
	a Printer Definition Table (PDT) file. The incorrect formatting will cause data
	to be printed farther from the left margin than was intended.
	
	As an example, assume a print job that is supposed to generate the following
	output:
	
	  123456789
	      AAAA
	
	The second line of the print job is supposed to print 'AAAA' (without quotes)
	starting at print position (column) 5. If this print job includes an Absolute
	Horizontal Move command at the beginning of the second line that specifies that
	the next position is column number 5, the following output will be generated if
	the SNA Server print session is configured to use a PDT file:
	
	  123456789
	       AAAA
	
	The second line will start printing at print position (column) 6 instead of print
	position 5.
	
	This does not occur if the AS/400 print session is not configured to use a PDT in
	SNA Server Manager.
	
	For additional information about a similar problem with the Absolute Vertical
	Move Command, please see the following article in the Microsoft Knowledge Base:
	
	Absolute Vertical Move Command Handled Incorrectly if PDT Used
	
	CAUSE
	=====
	
	The virtual print driver used by SNA Server's host print service does not keep
	track of the print job's current print position when a PDT file is used for a
	print session. Consequently, the 5250 print provider always uses a current print
	position of 1 when calculating the number of print positions to move across the
	current print line when processing an Absolute Horizontal Move command. This
	results in extra spaces being sent to the printer, which moves the print data
	too far across the current print line.
	
	The current print position is tracked when a PDT file is not used, which is why
	this problem does not occur when a PDT file is not used for the AS/400 print
	session.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0 SP2. This problem was
	first corrected in SNA Server version 3.0 Service Pack 4 and SNA Server version
	4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After applying the update, the host print service keeps track of a print job's
	current print position when a PDT file is used.
	
	The SCS control code Presentation Position (PP) '0x34' is commonly used in AS/400
	(APPC) printing. This control code allows the print position to be moved either
	horizontally or vertically, relative to the previous position or to an absolute
	position.
	
	The following are the four forms of the Presentation Position SCS control code.
	
	  Absolute Horizontal Presentation Position (AHPP) '0x34C0(nn)'
	  Parameters: nn - The column number the print position is set to.
	  Example: 34C00F
	  34C0 - AHPP
	  0F - column number 15
	
	  Relative Horizontal Presentation Position (RHPP) '0x34C8(nn)'
	  Parameters: nn - The number of columns to move from the current print
	  position.
	  Example: 34C80F
	  34C8 - RHPP
	  0F - 15 columns
	
	  Absolute Vertical Presentation Position (AVPP) '0x34C4(nn)'
	  Parameters: nn - The line number the print position is set to.
	  Example: 34C40F
	  34C4 - AVPP
	  0F - line number 15
	
	  Relative Vertical Presentation Position (RVPP) '0x344C(nn)'
	  Parameters: nn - The number of lines to move from the current print position.
	  Example: 344C0F
	  344C - RVPP
	  0F - 15 lines
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
