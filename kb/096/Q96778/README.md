---
layout: page
title: "Q96778: Verifying Printer Ports on a 3Server"
permalink: kb/096/Q96778/
---

## Q96778: Verifying Printer Ports on a 3Server

	Article: Q96778
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	It is possible to verify printer ports directly on a 3Server using the COPY
	command. This procedure allows isolation from the LAN Manager software and Print
	Manager running on the 3Server. To copy directly to a printer port on the
	3Server, do the following:
	
	1. From an OS/2 workstation, log in as an administrator on the 3Server.
	
	2. Do a NET ADMIN /C connection using the following command
	
	     net admin \\servername /c
	
	  where \\servername is the name of the 3server. You will now have a prompt that
	  looks similar to below:
	
	     [\\servername] _
	
	3. From this command prompt, do a DIR command for *.CMD.
	
	4. Select one of the listed files (these are OS/2 command files and are pure
	  text).
	
	5. Copy the selected file to the printer port (this could be LPT1 or COM1, for
	  example, depending on what port the printer is connected to). The command is
	  as follows:
	
	     copy setmode.cmd lpt1
	
	6. You should receive a "one file(s) copied" message. If the printer prints the
	  file, you have then verified that the port and printer are functioning
	  properly. If no printout is obtained, then a problem exists with either the
	  port, printer, or printer cabling.
	
	MORE INFORMATION
	================
	
	If your printer is a PostScript printer, use the following commands:
	
	  copy con lpt1
	  showpage
	  ^z
	
	After the command is entered, you should receive a "one file(s) copied" message.
	SHOWPAGE is the PostScript command to eject a page. On some older machines, you
	may need to add the /B switch to the line. For example,
	
	  copy file.txt lpt1 /b
	
	This command sends the file in binary format, thereby avoiding any end-of-file
	problems.
	
	Additional query words: 2.10 3Com 3Server
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
