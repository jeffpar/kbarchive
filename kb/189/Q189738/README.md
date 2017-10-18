---
layout: page
title: "Q189738: HOWTO: Run Setup1.vbp in the Design Environment"
permalink: kb/189/Q189738/
---

## Q189738: HOWTO: Run Setup1.vbp in the Design Environment

	Article: Q189738
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can customize the installation program created by the Setup Wizard (renamed
	Package and Deployment Wizard, or PDW, in Visual Basic 6.0) by modifying the
	Setup1.vbp project, also known as the Setup Toolkit. However, you cannot run or
	debug this project in the Visual Basic Design Environment unless you emulate the
	behavior of the compiled setup routine.
	
	NOTE: Microsoft Technical Support does not support the modification of the setup
	process or any of the setup files. Support is provided for the Setup Wizard on
	an "as is" basis only.
	
	MORE INFORMATION
	================
	
	Before you can run the Visual Basic portion of setup, the Setup.exe program must
	copy certain files to their destination directories. Setup.exe also creates an
	uninstall log file that is used by Setup1.exe for 32-bit applications, and it
	copies Setup1.lst to the \Windows directory so it will not be swapped out.
	
	Setup.exe invokes Setup1.exe (Setup132.exe using Visual Basic 4 32-bit) with
	certain command-line arguments. In order to run the Setup1 project in the Visual
	Basic Design Environment, these arguments must be set. Do this by launching the
	Visual Basic Design Environment from the Setup program and specifying your
	modified Setup1.vbp as a command-line argument.
	
	Step-by-Step Example
	--------------------
	
	1. Run the Application Setup Wizard or PDW, and follow the steps to produce the
	  default setup distribution set in a folder.
	
	2. Edit the Setup.lst file in a text editor, such as Notepad. Use the method
	  described below for the version of Visual Basic installed, making changes
	  where noted:
	
	  Visual Basic 4.0 16-bit
	
	  Locate:
	
	  Setup=setup1.exe
	
	  Replace it with:
	
	  Setup=c:\vb\vb.exe c:\vb\setupkit\setup1\setup1.vbp /cmd
	
	  Visual Basic 4.0 32-bit
	
	  Locate:
	
	  Setup=setup132.exe
	
	  Replace it with:
	
	  Setup=c:\vb\vb32.exe c:\vb\setupkit\setup1\setup1.vbp /cmd
	
	  Visual Basic 5.0
	
	  Locate:
	
	  Setup=setup1.exe
	
	  Replace it with:
	
	  Setup="c:\program files\devstudio\vb\vb5.exe"
	        "c:\program files\devstudio\vb\setupkit\setup1\setup1.vbp" /cmd
	
	  NOTE: The entry should be on one line only, with necessary quotation marks
	  depending on long file name usage.
	
	  Visual Basic 6.0
	
	  Locate:
	
	  Spawn=setup1.exe
	
	  Replace it with:
	
	  Spawn=C:\PROGRA~1\MICROS~1\VB98\VB6.exe 
	  C:\PROGRA~1\MICROS~1\VB98\Wizards\PDWizard\Setup1\Setup1.vbp /cmd
	
	  NOTE: The entry should be on one line only. Your path may vary depending upon
	  where you installed Visual Basic 6.0. Please change the path in the example
	  above as needed, using short file names (8.3).
	
	  Modify the paths as appropriate. Save Setup.lst when this step is complete.
	
	3. Start the installation by running Setup.exe.
	
	  After Setup.exe finishes, it will start the Visual Basic Design Environment
	  with the Setup Toolkit (Setup1.vbp) project loaded, the correct files in the
	  correct places, the uninstall log already created, and with the command-line
	  arguments set properly. This is the function of the /cmd argument. It allows
	  Visual Basic to pick up the command-line arguments that Setup.exe sends to
	  the second portion of the installation process, Setup1.exe (Setup132.exe
	  using Visual Basic 4.0).
	
	4. Add the desired break points. Press the F5 or F8 key to run the project.
	
	  Note that if you click the "Exit Setup" button at any time while running the
	  project, or if the program runs to the end either successfully or by a
	  trapped error, the log file (setup.lst) and the uninstall program are
	  deleted. Conversely, if you run repeated tests of your version of Setup
	  Toolkit, multiple copies of the log file (StXunst.000, StXunst.001, and so
	  on) are copied into your \Windows directory, where "X" is the version of
	  Visual Basic being used. These may be safely deleted after you exit the
	  Visual Basic Design Environment.
	
	Additional query words: command line parameters IDE
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
