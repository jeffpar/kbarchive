---
layout: page
title: "Q124345: Updated Calculator Accessory for Windows"
permalink: /kb/124/Q124345/
---

## Q124345: Updated Calculator Accessory for Windows

{% raw %}

	Article: Q124345
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbfile win31 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Introduction
	------------
	
	The WW1138.EXE file contains an updated version of the Calculator
	accessory that is shipped with Microsoft Windows 3.1x and Windows for
	Workgroups 3.1x. Previous versions of Calculator display simple
	subtraction errors when you subtract two numbers that include values to
	the right of the decimal point. While Calculator is determining how to
	display the solution, it encounters a loss of precision and shows an
	incorrect answer.
	
	NOTE: This rounding error is unrelated to the floating-point unit
	(FPU) in the Intel(R) Pentium(R) chip. This problem occurs only in
	Calculator and does not affect Windows, other components in Windows,
	or other Windows-based applications.
	
	In addition to correcting the problem described above, the new rounding
	algorithm in Calculator causes it to perform more like most hand-held
	calculators. For example, if you enter the following equation in the
	updated Calculator accessory or in a hand-held calculator
	
	  [(1/3 + 10 - 10) x 3]
	
	the result is 0.9999. The result in previous versions of Calculator is
	1.0. The value 0.9999 is generated because significant digits are lost by
	adding and subtracting 10. This is a secondary effect of the changes made
	in Calculator to correct the precision errors.
	
	To install the updated files
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Ww1138.exe now
	
	For additional information about how to download Microsoft Support
	files, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available 
	on the date of posting to scan this file for viruses. Once posted, 
	the file is housed on secure servers that prevent any unauthorized 
	changes to the file.
	
	1. Download the WW1138.EXE file from the Microsoft Download Center to an empty
	  folder.
	
	2. Double-click the WW1138.EXE file you downloaded in step 1.
	
	3. Quit Windows, or open an MS-DOS command prompt within Windows.
	
	4. Rename the existing CALC.EXE file in your Windows directory. For example, if
	  Windows is installed in a directory on drive C called WINDOWS, type the
	  following commands, pressing ENTER after each line:
	
	  cd\windows
	  ren calc.exe calc.old
	
	5. At an MS-DOS command prompt, type the following and press ENTER
	
	  copy <source>:\calc.exe <location>
	
	  where <source> is the directory containing the file you downloaded from
	  online services, and <location> is the path to your Windows directory.
	
	  For example, if you downloaded the WW1138.EXE file from online services to
	  C:\DOWNLOAD and C:WINDOWS is the path to your Windows directory, type:
	
	  copy c:\download\calc.exe c:\windows
	
	Steps to Reproduce Problem Using Previous Versions of Calculator
	----------------------------------------------------------------
	
	1. To perform this test, choose two numbers that include values to the right of
	  the decimal point (for example, 12.52 and 12.51).
	
	2. Double-click the Calculator icon in the Accessories group.
	
	3. Enter the larger number first (for example, 12.52).
	
	4. Press the MINUS SIGN (-).
	
	5. Enter the smaller number (for example, 12.51).
	
	6. Press the EQUAL SIGN (=).
	
	Note that in this example you do not receive .01, the expected result.
	Instead, you receive one of the following:
	
	  0.00
	  0.0099999999
	  0.010000001
	
	The updated Calculator accessory displays the correct result, which is
	.01.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile win31 kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
