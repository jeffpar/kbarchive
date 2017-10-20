---
layout: page
title: "Q225471: LU3 Printing: Print Data May Overwrite Previous Line of Data"
permalink: /kb/225/Q225471/
---

## Q225471: LU3 Printing: Print Data May Overwrite Previous Line of Data

{% raw %}

	Article: Q225471
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	An LU3 print job processed through SNA Server's Host Print Service may result in
	output that has data printed on top of previously printed lines of data. For
	example, data that is supposed to print on the fourth line of a page may be
	printed on top of the data printed on the third line of the page.
	
	This problem is only likely to affect a few lines of data in a print job.
	
	CAUSE
	=====
	
	Print server does not issue an automatic New Line (NL) command for LU3 print
	jobs when a line of data reaches the Maximum Print Position (MPP) or Default
	Page Width if the character at print position MPP + 1 is a NL, Carriage Return
	(CR), or End of Medium (EM) command.
	
	If the character at position MPP + 1 is a CR, the data intended for the next
	print line will print over the data on the current print line as the CR does not
	cause the print position to move down to the next print line.
	
	This behavior is by design as described below.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following registry entry can be added to force print server to always issue
	the automatic NL when a line of data reaches the MPP and a CR exists at MPP +
	1.
	
	Note: This does not have any effect when a NL or EM exists at MPP + 1.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: AlwaysDoNL
	  Data Type: REG_SZ
	  Value: True
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	The MPP or Default Page Width is used to specify the number of characters per
	print line. SNA Server allows values of 1 to 255 to be configured for a print
	session in SNA Server Manager. Typically, values for 3270 printing are 80 and
	132. The MPP value for a given LU3 print session or print job can be set by one
	of the following methods listed in order of precedence:
	
	- Write Control Character (WCC) byte (Bits 2 and 3) within the 3270 data
	  stream.
	- In a Printer Definition Table (PDT), using the MAXIMUM_PRINT_POSITION session
	  parameter.
	- SNA Server Manager Print Properties value.
	
	When Print Server determines that the MPP has been reached for a particular line
	of print data, it will issue an automatic NL command to make sure the print
	position is moved down one line before printing any additional data. An
	exception to this rule exists for LU3 printing when the print data contains a
	NL, CR, or EM command at MPP + 1. In these cases, the automatic NL is cancelled,
	and the subsequent NL, CR, or EM command is executed.
	
	If an NL command is present at MPP + 1, suppressing the automatic NL insures that
	two NL commands are not issued.
	
	If a CR command is present at MPP + 1, the suppression of the automatic NL allows
	a way to provide bold or underline printing in an LU3 print job that normally
	does not allow this type of advanced print function. The CR command returns the
	print position to the beginning of the current print line. If the print job
	included the same print data, the result would be bold print. If the print job
	included underscore (_) characters, the result would be underline print.
	
	If the EM command is present at MPP + 1, the suppression of the automatic NL just
	allows the EM command to be processed without moving down one print line. The EM
	command is used to signify the end of the screen of print data. LU3 printing is
	processed as screens of data much like 3270 display sessions are screen
	oriented. This allows the next "screen" of data to begin printing where the
	prior "screen" ended, preventing a possible formatting problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
