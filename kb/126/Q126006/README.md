---
layout: page
title: "Q126006: Explorapedia: Err Msg: Cannot Open .TDF; Unable to Locate"
permalink: /kb/126/Q126006/
---

## Q126006: Explorapedia: Err Msg: Cannot Open .TDF; Unable to Locate

	Article: Q126006
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbtshoot kbimukbfaq
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Microsoft How the Leopard Got His Spots, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of the Microsoft programs listed at the top of this article,
	you may receive one of the following error messages:
	
	  Cannot open .TDF file. Run setup again.
	
	  <Program Name> is unable to locate a necessary file. Make sure the
	  <Program Name> is in your CD-ROM drive and try again. If the disk is in
	  your drive and you continue to get this message, run setup again.
	
	  Cannot find file C:\Mskids\Leopard\Leopard.tdf
	
	CAUSE
	=====
	
	The behavior can occur for any of the following reasons:
	
	- The CD-ROM for the program is damaged or needs cleaning.
	
	- The CD-ROM drive cache is not properly configured.
	
	- The Windows registry is damaged or contains incorrect information.
	
	- Program files are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, clean the CD-ROM for the program. To clean the CD- ROM,
	use a commercially available CD-ROM cleaning kit, or gently wipe the silver side
	of the CD-ROM with a soft, lint-free cotton cloth. When you clean the CD-ROM,
	wipe from the center of the disc toward the edge. Do not use a circular motion.
	
	If the issue continues to occur, proceed to the appropriate troubleshooting
	method for your version of Microsoft Windows.
	
	Windows 95/98
	-------------
	
	To troubleshoot this issue in Microsoft Windows 95 or Microsoft Windows 98,
	follow these steps:
	
	1. Verify that CD-ROM drive caching is properly configured. For information
	  about how to optimize the cache settings for the CD-ROM drive, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q184410 How to Use Msinfo32.exe to Optimize CD-ROM Cache Settings
	
	  If the issue continues to occur, proceed to the next step.
	
	2. Remove and reinstall the program. To do so, follow these steps:
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type "mskids" (without the quotation marks), and then
	     click Find Now.
	
	  c. In the list of found files, double-click the Mskids folder.
	
	  d. To remove Explorapedia, right-click the Explora folder, click Delete, and
	     then click Yes To All. To remove How the Leopard Got His Spots,
	     right-click the Leopard folder, click Delete, and then click Yes To All.
	
	  e. Reinstall the program, and then restart Windows.
	
	3. Rebuild the Windows registry. For information about how to rebuild the
	  registry in Windows 95/98, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q131431 How to Troubleshoot Registry Errors in Windows 95
	
	Windows 3.1x
	------------
	
	To troubleshoot this issue in Microsoft Windows 3.1x or Microsoft Windows for
	Workgroups 3.1x, follow these steps:
	
	1. Disable CD-ROM caching. To do so, follow these steps:
	  a. On the File menu in Program Manager, click Run.
	
	  b. In the Command Line box, type "sysedit" (without the quotation marks), and
	     then click OK.
	
	  c. In the Autoexec.bat window, locate the line that calls the Smartdrv.exe
	     file. If the line exists, press the SPACEBAR key, and then type "/u"
	     (without the quotation marks) at the end of the line.
	
	  d. On the File menu, click Save.
	
	  e. On the File menu, click Exit.
	
	  f. Exit Windows and restart the computer.
	
	  If the issue continues to occur, continue to the next step.
	
	2. Determine if the Windows registry is damaged, and if so, rebuild it. To do
	  so, follow these steps:
	  a. In the Main group in Program Manager, double-click File Manager.
	
	  b. In the Windows folder, click the Reg.dat file.
	
	  c. On the File menu, click Rename.
	
	  d. In the To box, type "regdat.old" (without the quotation marks), and then
	     click OK.
	
	  e. Exit and restart Windows.
	
	  f. Reinstall the program.
	
	  If the issue is resolved, the original Reg.dat file was damaged. Reinstall all
	  of your other Windows-based programs to ensure that they run correctly or
	  follow the instructions in the More Information section to rebuild the
	  Reg.dat file.
	
	  If the issue is not resolved, follow these steps to restore the original
	  Reg.dat file:
	  a. In the Main group in Program Manager, double-click File Manager.
	
	  b. In the Windows folder, click the Reg.dat file.
	
	  c. On the File menu, click Delete.
	
	  d. In the Windows folder, click the Regdat.old file.
	
	  e. On the File menu, click Rename.
	
	  f. In the To box, type "reg.dat" (without the quotation marks), and then
	     click OK.
	
	  g. Exit and restart Windows.
	
	3. Restore missing or damaged program files. To do so, follow these steps:
	  a. In the Main group in Program Manager, double-click File Manager.
	
	  b. Double-click the Mskids folder.
	
	  c. Remove the program. To remove Explorapedia, click the Explora folder,
	     click Delete on the File menu, and then click Yes To All. To remove How
	     the Leopard Got His Spots, click the Leopard folder, click Delete on the
	     File menu, and then click Yes To All.
	
	  d. Reinstall the program, and then restart Windows.
	
	MORE INFORMATION
	================
	
	For information about how to rebuild the Reg.dat file in Windows 3.1x, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q111772 Manually Registering Works for Windows 3.0
	
	  Q122964 How to Rebuild the Reg.Dat File and Re-Register Applications
	
	
	
	Additional query words: 1.00 kids home homekids mskids errmsg tadpole tad nature nature.tdf people people.tdf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbtshoot kbimu kbfaq
	Technology        : kbHomeMMsearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbExplorapediaNature100 kbExplorapediaPeople100 kbPJLeopard
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
