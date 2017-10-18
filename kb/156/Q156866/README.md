---
layout: page
title: "Q156866: FIX: REPORT FORM Command Returns Wrong Font Size in Windows 95"
permalink: kb/156/Q156866/
---

## Q156866: FIX: REPORT FORM Command Returns Wrong Font Size in Windows 95

	Article: Q156866
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting kbvfp kbvfp500aFIXkbbuglist kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a report using Windows 95 only and the REPORT FORM TO PRINTER
	PROMPT command, the printed output is reduced down to only one quarter of the
	page. This makes the printout very small and difficult to read. This problem is
	sometimes reversed and the output is 200-400 percent larger than expected. This
	problem has been corrected in Microsoft Visual FoxPro version 5.0a.
	
	CAUSE
	=====
	
	There are several scenarios that produce the bug in Windows 95 only. This is not
	a problem in Windows NT. The anomaly appears only if printer drivers are
	installed in a certain way or if the printer driver cannot pass the correct
	information through the printer dialog box.
	
	It also seems to make a difference if either one of the drivers has been
	installed, and deleted, and reinstalled. Depending on which has been installed
	makes the other exhibit the bad behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Microsoft
	Visual FoxPro version 5.0a.
	There have been isolated reports of this problem still happening in Visual FoxPro
	5.0a build 402. For best results, upgrade to Visual Studio 97 Service Pack 3.
	This upgrades the Visual FoxPro 5.0a build to 415. Be sure to upgrade the Visual
	FoxPro run-time support libraries also. Installing the service pack should do
	this. To check the build, get the properties on the VFP.exe and VFP5.dll for the
	development version. Check the run-time files in the Windows\System or
	Windows\System32 directories. They are VFP500.dll and VFP5ENU.dll.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Depending on how you installed the drivers, using printer drivers for an HP
	LaserJet IIISI and an HP LaserJet 4SI may produce the problem. The problem can
	occur under different circumstances, but only one case seems to always produce
	the problem.
	
	All drivers are installed by double-clicking the Printers icon in the Control
	Panel while Visual FoxPro 5.0 is not running.
	
	
	Steps to Reproduce Behavior (on an HP printer)
	----------------------------------------------
	
	1. Uninstall all Printer drivers. (This does not really delete the drivers.)
	
	2. Reboot. (This is important.)
	
	3. Install the 4SI driver. (If you have had this previously installed you are
	  prompted that the Drivers exists and do you want to overwrite them. Choose
	  YES if you are prompted.)
	
	4. Restart. (This is important.)
	
	5. Create and run a simple one line report named "Test.frx" that uses one or two
	  fields from \Samples\Tastrade\Data\Customer.dbf
	
	  To run the report, issue the following command:
	
	  
	
	        REPORT FORM test TO PRINTER PROMPT
	
	  This report should appear fine. (If you previously had the driver installed,
	  you may get the problem now.)
	
	6. Go back to Printers on the Control Panel and install the HP IIISI. When asked
	  "Do you want to overwrite the existing drivers?" click Yes.
	
	  Note that in all cases you are asked if you want to overwrite files. Just make
	  sure you install the IIISI after you have installed the 4SI.
	
	7. Reboot.
	
	8. Run the same report on both printers.
	
	The font size most likely is either much larger or much smaller than expected on
	the IIISI. The font size is more often than not much larger than expected. This
	sometimes occurs on the 4SI.
	
	Additional query words: tiny postage size enlarged credit-card small reduced increase
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting kbvfp kbvfp500aFIX kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
