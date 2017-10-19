---
layout: page
title: "Q177302: HOWTO: Troubleshooting Memory Errors Under OS 8"
permalink: /kb/177/Q177302/
---

## Q177302: HOWTO: Troubleshooting Memory Errors Under OS 8

	Article: Q177302
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300b
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WARNING: The information in this article has not been confirmed or tested by
	Microsoft. Some or all of the information in this article has been taken from
	unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION PROVIDED IN THIS
	ARTICLE IS AT YOUR OWN RISK. Microsoft provides this information "as is" without
	warranty of any kind, either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	Both FoxPro and Visual FoxPro may produce memory related error messages when you
	run them on the new Macintosh OS 8 software. These errors may occur at any point
	in the usage of either the development version of FoxPro or within a compiled
	application. Since both Microsoft FoxPro 2.6a for the Macintosh and Visual
	FoxPro for the Macintosh 3.0b were designed to run on Apple OS 7.x systems,
	Microsoft cannot guarantee the either product will operate successfully on OS 8.
	However, some users have been able to run FoxPro and Visual FoxPro on OS 8
	systems.
	
	Listed below are some suggested troubleshooting steps to take if memory related
	errors appear while running under OS 8.
	
	MORE INFORMATION
	================
	
	The following are a list of steps you may use in troubleshooting memory problems
	under OS 8. The suggestions provided below may not work in all situations.
	Often, the suggestions need to be cumulatively applied to the computer. Please
	note that these suggestions have helped some users. However, these steps do not
	correct all problems. If these steps do not provide the user with a stable
	system, you may have to run FoxPro or Visual FoxPro on a computer with a version
	of System 7.x.
	
	Microsoft does not support, endorse, or recommend any of these products. We
	provide this information only as a convenience for our customers and do not
	provide warranties of any kind, either expressed or implied, including but not
	limited to the implied warranties of merchantability and/or fitness for a
	particular purpose.
	
	1. Reduce the number of colors the monitor uses to either thousands or 256. This
	  frees up memory.
	
	2. Turn off the virtual memory on the machine. If it already off, turn it on.
	  Start with virtual memory set to 1 MB more than the amount of physical RAM.
	  If this does not help, try increasing the amount of virtual memory.
	  Conversely, if virtual memory is already set to a large value, try reducing
	  the amount available.
	
	3. If you are using a CoStar AddressWriter printer, remove the driver. We have
	  received unconfirmed reports that version 2.1 of the AddressWriter printer
	  driver causes conflicts.
	
	4. Remove the FoxPro Settings file from the Preferences folder and restart
	  FoxPro.
	
	5. Remove the extensions Foxtools.cfm, on Visual FoxPro for the Macintosh, or
	  Foxtools.mlb in FoxPro 2.6, and Foxdoc.mlb from the System's Extension
	  folder. After removing these files, restart the machine and start FoxPro.
	
	6. Try increasing or decreasing the amount of disk cache used on the computer.
	  This setting is found in Control Panel under Memory.
	
	7. If you are running a PPC application on a Power Macintosh machine and memory
	  errors occur, try making a 68K version of the application. While this
	  application may prove slower, it may help solve the memory conflict.
	
	8. Rebuild the desktop and remove any desktop pictures or patterns.
	
	9. Try turning off file sharing.
	
	10. If FoxPro is running over a network, try running it locally and see if the
	  network is causing the problem.
	
	11. The default font used in FoxPro is Geneva. If this font becomes corrupted,
	  errors may occur. To replace this font, remove it from the System's Font
	  folder and copy the Geneva font file from the System disks to that location.
	
	12. Remove the OpenDoc files from System Folder\Editors\OpenDoc folder and place
	  these files in a temporary folder you create on your desktop. After you
	  restart the computer, start FoxPro. If this does not solve the problem copy
	  the files back from the temporary folder.
	
	13. Instant Organizer from Claris has been reported to cause menu corruption
	  with FoxPro. This may not be limited to OS 8 and may occur in system
	  software versions prior to OS 8.
	
	
	REFERENCES
	==========
	
	Several other features of both FoxPro 2.6a and Visual FoxPro either behave
	differently or do not function at all under OS 8. For additional information,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q174915 VFP 3.0 for the Macintosh Setup Wizard Fails under OS 8
	
	  Q176729 Menus Behave Differently In OS8
	
	  Q153528 SET PRINTER TO Enhancements in Visual FoxPro for Macintosh
	
	Additional query words: crash hang
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300b 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
