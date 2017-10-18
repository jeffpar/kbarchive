---
layout: page
title: "Q174113: Cannot Hear Music on the MSN Onstage Web Page"
permalink: kb/174/Q174113/
---

## Q174113: Cannot Hear Music on the MSN Onstage Web Page

	Article: Q174113
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kbsound kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to the MSN, The Microsoft Network, Onstage Web page, you may be
	unable to hear music, and a musical note symbol may not appear in the
	lower-right corner of the Web page.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following conditions exist:
	
	- Your computer does not contain an Intel Pentium processor.
	
	- The Msn.ini file is damaged or missing.
	
	- You are using an outdated version of the MSN Music and Animation components
	  (MSN 2.5 only).
	
	RESOLUTION
	==========
	
	Your computer must contain an Intel Pentium processor for you to be able to hear
	music on the Onstage Web page. To determine the type of processor in your
	computer, right-click the My Computer icon on the desktop, and then click
	Properties. If "Pentium(r)" is not listed under Computer, consult the
	documentation included with your computer to determine the type of processor
	your computer contains.
	
	If your computer does contain an Intel Pentium processor and you still cannot
	hear music on the Onstage Web page, the Msn.ini file may be damaged or missing.
	To resolve this issue, copy a new Msn.ini file to your computer. To do so, use
	the following steps:
	
	1. Empty the Temporary Internet Files folder. To do so, follow these steps in
	  Microsoft Internet Explorer:
	  a. Right-click the The Internet icon on the desktop, and then click
	     Properties.
	
	  b. On the Advanced tab, click Settings under Temporary Internet Files.
	
	  c. Click Empty Folder, and then click Yes when you are prompted to delete the
	     files.
	
	  d. Click OK, and then click OK again.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "msn.ini" (without quotation marks), and then click
	  Find Now.
	
	4. In the list of found files, right-click the Msn.ini file, and then click
	  Delete.
	
	5. Connect to the Internet as you normally would, and then access the following
	  Web page:
	
	  http://fdl.msn.com/public/msndata/msn.ini
	
	6. When you are prompted, click Save It To Disk, and then save the Msn.ini file
	  in the Program Files\OnMSN folder. If you are prompted to overwrite an
	  existing file, click Yes.
	
	7. Double-click the MSN icon on the desktop to start Program Viewer.
	
	If you are using MSN 2.5, and you are still unable to hear music on the Onstage
	Web page, you may be using an outdated version of the MSN Music and Animation
	components. To resolve this issue, remove and reinstall the MSN Music and
	Animation components. To do so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click MSN Music & Animation Components, and
	  then click Add/Remove.
	
	4. Follow the instructions on the screen. If you are prompted to delete the
	  component's files, click Yes.
	
	5. Click OK until you return to Control Panel.
	
	6. Close Control Panel.
	
	7. Insert the MSN 2.5 CD-ROM into the CD-ROM drive. If the Welcome To MSN screen
	  appears, click Browse The CD, and then proceed to step 10. If the Welcome To
	  MSN screen does not appear, continue to the next step.
	
	8. Double-click My Computer.
	
	9. Double-click the MSN (CD-ROM drive) icon. When the Welcome To MSN screen
	  appears, click Browse The CD.
	
	10. Double-click the MSNSetup folder.
	
	11. Double-click the Compnts folder.
	
	12. Double-click the Imtmmctl.exe file.
	
	13. Close the Compnts window, and then restart the computer.
	
	14. Double-click the MSN icon on the desktop to start Program Viewer.
	
	STATUS
	======
	
	This behavior is by design and is meant to reserve resources on computers that
	contain non-Intel Pentium processors.
	
	MORE INFORMATION
	================
	
	For additional information about this problem, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q175577 The On Stage Web Page in MSN Does Not Play Music
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kbsound kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
