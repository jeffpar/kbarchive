---
layout: page
title: "Q247949: SMS: How to Create a Simple Test Advertisement"
permalink: /kb/247/Q247949/
---

## Q247949: SMS: How to Create a Simple Test Advertisement

{% raw %}

	Article: Q247949
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbSoftwareDist
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create a simple test advertisement.
	
	MORE INFORMATION
	================
	
	The key to success is to quickly and efficiently create an advertisement that
	tests the capabilities of System Management Server (SMS) without complications.
	A simple, straight-forward approach is the best way to quickly troubleshoot to
	see if the services, accounts and processes are working.
	
	Using a simple program is the cornerstone to success. You can create a text file
	with a short sentence contained inside, or you can make a batch file that runs a
	display such as, "Hello."
	
	NOTE: Do not use Notepad.exe. Notepad only works with Microsoft Windows NT
	computers, and not with Microsoft Windows 95/98 computers.
	
	The preferred test application is Testapp.exe. On earlier versions of SMS 2.0,
	Testapp.exe is located on the SMS 2.0 CD at the following location:
	
	  \Support\Reskit\Bin\I386\Diagnose
	
	For more recent versions of SMS 2.0, the application can be found by installing
	the SMS 2.0 Support Tools. These tools may be installed from the SMS 2.0 CD-ROM
	by running \Support\Support.exe. By default, the application will be copied to:
	
	  \Program Files\SMS 2.0 Support Tools\Bin\i386\Software Distribution Tools
	
	To Create a Simple Test Advertisement
	-------------------------------------
	
	1. On the primary parent site server create a directory off of the root of the
	  C: drive, called "TEST" (without the quotation marks).
	
	2. Copy Testapp.exe from the CD or from the SMS 2.0 Support Tool folder to
	  C:\TEST
	
	3. Use the Distribution Wizard
	
	Using the Distribution Wizard
	-----------------------------
	
	Use the Distribution Wizard to create a new Package, Advertisement and Collection
	to ensure that there are no old settings or modifications that could cause
	problems. The new collection will be targeted at one workstation. Again,
	simplicity is the key to testing. Your target workstation should be as close to
	the primary parent site server as possible. It is best to not choose a system
	that is across a WAN link for this first run.
	
	Instructions for the Primary Parent Site
	----------------------------------------
	
	1. Open the SMS Administrator MMC.
	
	2. Open "Site Database-->Collections-->All Systems".
	
	3. On the Details window on the right side, right-click a system that is closest
	  to the Site Server.
	
	4. Click All Tasks, and then Distribute Softwareto start the wizard.
	
	5. Click Next on the first Welcome screen.
	
	6. Choose "Create a new package and program" in the Package dialog box. Click
	  Next.
	
	7. In the Name: box type "Test Application" (without the quotation marks). You
	  do not need to fill out the rest of the form. Click Next.
	
	8. Select "Create a compressed version of the source from the Source Files
	  window".
	
	9. For Source Directory, choose "Local drive on site server", and then click
	  "Browse for the Source Directory".
	
	10. Open the C: drive, and then click TEST. Click OK, and then click Next.
	
	11. Click to select only your Site Server in the Distribution Points window, and
	  then click Next.
	
	12. In the Product Distribution window, next to Name:, type "Testapp" (without
	  the quotation marks), and then at Command Line:, click Browse to select
	  Testapp.exe, and then click Open (do not type it in, be sure to use
	  "browse"). Click Next.
	
	13. In the Program Properties window click to unselect "User input required".
	  None of the check boxes in this window should have a check mark in them.
	  Again, keep it simple.
	
	14. Make sure Yes is selected in the "Advertise a Program" dialog box, and click
	  Next.
	
	15. Use the default settings of "Create a new collection containing this
	  resource and advertise to the new collection", and then click Next.
	
	16. Accept the default in the Name text box, and then click Next.
	
	17. Do not change the settings in the Membership Rule window, and then click
	  Next.
	
	18. Keep the default in the Name box in the Advertisement Name dialog box, and
	  then click Next.
	
	19. In the "Advertise to Subcollection" keep the default settings of "Advertise
	  the package to members of the subcollections as well", and then click Next.
	
	20. At the Advertisement Schedule window, verify that it has today's date and
	  set the time to 10 minutes in the future. Select No. The advertisement never
	  expires, and then click Next.
	
	21. At the Assign Program window, accept the default of "No. Do not assign the
	  program", and then click Next.
	
	22. Click Finish at the Completing Distribution Software Wizard window to
	  complete the wizard.
	
	Wait about 15 to 20 minutes for the Advertisement to be pushed out to the
	distribution point because in step 20, you set the Advertisement to start 10
	minutes in the future and another 5 to 10 minutes is needed to allow the whole
	process to complete.
	
	Instructions for the Target Client
	----------------------------------
	
	1. Open Control Panel, and then Advertise Programs Monitor. Press F5, and the
	  screen will stay blank, but the client will go up and check for new
	  advertisements.
	
	2. Next, open Control Panel, Advertise Programs, and then run Testapp.
	
	To be aware of what is occurring, look at "Site Database-->Site
	Status-->Advertisement Status" and refresh the window often.
	
	When you see a "1" in the Received column of the Testapp advertisement, you can
	go to the client and run the Advertisement Programs applet which is located in
	the Control Panel.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
