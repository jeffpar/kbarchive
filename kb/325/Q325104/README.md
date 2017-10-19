---
layout: page
title: "Q325104: Flight Simulator: Error Msg: Scenery Library Object Not Found"
permalink: /kb/325/Q325104/
---

## Q325104: Flight Simulator: Error Msg: Scenery Library Object Not Found

	Article: Q325104
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a flight or fly into a specific area, you receive the
	following error message:
	
	  Scenery library object not found. This may cause some scenery, such as some
	  buildings, to not display.
	
	After you click OK, Flight Simulator continues to load, but some scenery does not
	appear as expected.
	
	CAUSE
	=====
	
	This problem may occur if any of the following conditions is true:
	
	- Your installation of Flight Simulator is corrupted.
	
	- Your flight plan includes a scenery area configuration that requires scenery
	  files that are not included in the game.
	
	- You are flying into an area whose scenery area configuration requires scenery
	  files that are not included in the game.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following methods in the order in which they
	are presented.
	
	Method 1: Look for Documented Missing Scenery
	---------------------------------------------
	
	See the "More Information" section later in this article for a complete list of
	scenery areas that are missing from Flight Simulator 2002 and can cause the
	error message that is listed in the "Symptoms" section.
	
	Method 2: Remove and Then Reinstall Flight Simulator
	----------------------------------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	To remove and then reinstall Flight Simulator, perform the following four-part
	procedure.
	
	Part 1: Remove Flight Simulator:
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. In the left pane, click "Change or Remove Programs".
	
	4. Click "Microsoft Flight Simulator 2000" or "Microsoft Flight Simulator 2002",
	  and then click Remove.
	
	5. Follow the on-screen instructions to remove the program.
	
	Part 2: Delete the FS2000 or FS2002 Folder:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following:
	
	"c:\program files\microsoft games" (with the quotation marks)
	
	3. Click OK.
	
	4. Right-click the FS2000 or FS2002 folder, and then click Delete.
	
	5. Close the Microsoft Games window.
	
	Part 3: Perform a Clean Boot Operation:
	
	Use a clean boot to restart your computer.
	
	NOTE: A clean boot is a way to create a clean environment. When you start your
	computer with a clean boot, Microsoft Windows starts and loads only basic
	devices and services.
	
	To perform a clean boot, follow the steps that are appropriate for your version
	of Windows.
	
	Microsoft Windows Millennium Edition (Me):
	
	For information about how to perform a clean boot, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98:
	
	Run the System Configuration Utility (Msconfig.exe) to perform a clean boot. To
	do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. Restart your computer when you are prompted to do so.
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Microsoft Windows XP:
	
	NOTE:You must be logged on as an administrator or a member of the Administrators
	group to complete this procedure. If your computer is connected to a network,
	network policy settings may also prevent you from completing this procedure.
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click Selective Startup, and then click to clear the
	  Process SYSTEM.INI File, Process WIN.INI File, and Load Startup Items check
	  boxes. You cannot clear the Use Original BOOT.INI check box.
	
	3. On the Services tab, click to select the "Hide All Microsoft Services" check
	  box, and then click Disable All.
	
	4. Click OK, and then click Restart to restart your computer.
	
	For additional information about how to perform a clean boot, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Windows 2000:
	
	For information about how to perform a clean boot, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	Part 4: Reinstall Flight Simulator:
	
	Insert Flight Simulator CD1 into your CD-ROM or DVD-ROM drive, and then follow
	the on-screen instructions to reinstall the program.
	
	Part 5: Restart the Computer with a Normal Startup:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab, click Normal Startup, and then click OK. Restart your
	  computer when you are prompted to do so.
	
	Method 3: Limit Memory
	----------------------
	
	To limit memory, follow the steps that are appropriate for your version of
	Windows.
	
	Microsoft Windows XP:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the Boot.ini tab.
	
	4. Click Advanced Options.
	
	5. Click to select the /MAXMEM= check box, type "850" (without the quotation
	  marks) (or type a lower number), and then click OK.
	
	6. Click Apply, and then click OK.
	
	7. When you are prompted, restart your computer.
	
	Microsoft Windows 2000:
	
	1. Log on to Windows as Administrator.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "cmd" (without the quotation marks), and then click OK.
	
	4. Change to the root directory of the system partition, which is where
	  Boot.ini, Ntdetect.com, and NTLDR reside. (This is generally the C:\
	  partition.)
	
	  For example, type "c:" (without the quotation marks), press ENTER, type "cd\"
	  (without the quotation marks), and then press ENTER.
	
	5. Type "attrib -a -h -s boot.ini" (without the quotation marks), and then press
	  ENTER.
	
	6. Type "copy boot.ini boot.old" (without the quotation marks).
	
	  NOTE: This command creates a backup copy of the Boot.ini file and names it
	  Boot.old.
	
	7. Type "edit boot.ini" (without the quotation marks), and then press ENTER.
	
	8. Use the arrow keys to move to the end of the ARC path that you want under
	  [operating systems].
	
	9. Type /MAXMEM=256.
	
	  For example, the ARC path might appear as follows:
	
	  multi(0)disk(0)rdisk(0)partition(2)\WINNT="Microsoft Windows 2000
	  Professional" /fastdetect /MAXMEM=256 and so on.
	
	10. Press ALT+F, and then press S.
	
	11. Press ALT+F, and then press X.
	
	12. Type "attrib +a +s +h boot.ini" (without the quotation marks), and then
	  press ENTER.
	
	13. Type "exit" (without the quotation marks), and then press ENTER.
	
	14. Restart the computer.
	
	For additional information about the MAXMEM Option in Windows, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q108393 MAXMEM Option in Windows NT BOOT.INI File
	
	Microsoft Windows Millennium Edition (Me) or Microsoft Windows 98:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the Advanced tab.
	
	4. Click to select the "Limit memory to" check box, and then click the
	  appropriate option.
	
	5. Click OK two times.
	
	6. Click Yes when you are prompted to restart your computer.
	
	NOTE: After you have limited the available memory on your system, repeat the
	steps in method 2.
	
	MORE INFORMATION
	================
	
	The following list contains known scenery areas that generate the error message
	that is listed in the "Symptoms" section earlier in this article.
	
	NOTE: You can select the option to go to one of the scenery areas in the list,
	you can create a flight plan that includes one of these scenery areas, and you
	can fly into these areas, but you will receive the error message during the
	process. After you click OK, you can continue as expected.
	
	Known Scenery Problems in Flight Simulator 2002 :
	
	- Morristown Mun airport (KMMU) in New Jersey
	
	- Flying into New York by way of the area that surrounds Morristown Mun airport
	  (KMMU) in New Jersey
	
	- Boscombe Down airport in the United Kingdom
	
	- Flying into the area that surrounds Stonehenge or Boscombe Down in the United
	  Kingdom
	
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
