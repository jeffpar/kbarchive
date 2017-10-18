---
layout: page
title: "Q182137: PRB: Memory Error with HP LaserJet 4000 TN PCL 5e Driver"
permalink: kb/182/Q182137/
---

## Q182137: PRB: Memory Error with HP LaserJet 4000 TN PCL 5e Driver

	Article: Q182137
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After loading the HP LaserJet 4000 TN PCL 5e driver as either the default
	printer driver in Windows 95 or as the default printer driver in Visual FoxPro,
	the following error may occur when you try printing several large reports:
	
	  This program performed an illegal operation and will be shutdown.
	
	When you press the Details button, the following message appears:
	
	  VFP caused a general protection fault in module KRNL386.EXE at 0001:000014f1.
	
	This error does not seem to occur when you run Visual FoxPro on Windows NT 4.0
	using the Windows NT version of the HP LaserJet 4000 TN PCL 5e driver.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Windows 95 HP LaserJet 4000 TN PCL 5e printer driver on a
	  computer that is running Windows 95.
	
	
	2. Set the LaserJet 4000 TN PCL 5e as the default printer for Windows. The
	  driver can be directed to a file if you do not have an HP LaserJet 4000
	  printer.
	
	3. Create a quick report called Ztest using the Orditems table located in the
	  \Sample\Data folder. The report should use the LaserJet 4000 TN PCL 5e driver
	  as the default.
	
	4. Place the following code in a program and run the program. The code prints
	  the Ztest report to a text file 1000 times.
	
	        USE Home()+"\Samples\Data\Orditems.dbf"
	        FOR i= 1 to 1000
	        REPORT FORM ZTEST NOCONSOLE TO FILE Ztest.txt
	        DELETE FILE Ztest.txt
	        ENDFOR
	
	Depending on the speed of the computer, this error may take quite some time to
	appear.
	
	
	Additional query words: crash GPF hang
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
