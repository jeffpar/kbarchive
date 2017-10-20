---
layout: page
title: "Q196583: PRB: An Unknown Error Occurred While Building the Cabinet File"
permalink: /kb/196/Q196583/
---

## Q196583: PRB: An Unknown Error Occurred While Building the Cabinet File

{% raw %}

	Article: Q196583
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a setup package to a floppy disk using the Package option of the
	Package and Deployment Wizard (PDW), the following error message appears:
	
	  An unknown error occurred while building the cabinet file
	  '<Project Name>.CAB'. Please verify that you have proper access to the
	  destination and that there is sufficient space there to create the file.
	
	CAUSE
	=====
	
	There is insufficient disk space to create the Package. There are 3
	circumstances in which this can happen:
	
	- You attempted to create the package directly onto a floppy drive.
	
	- You attempted to create the package on a hard drive partition (or other mass
	  storage media) that has insufficient free space.
	
	- You attempted to create the package on a hard drive partition (or other mass
	  storage media) that has sufficient free space, but the hard drive partition
	  where the Temporary folder resides has insufficient free space for the
	  temporary files that are being created.
	
	The Package option of the Package and Deployment Wizard was designed to create
	the setup package on the hard drive (or other mass storage media) first. The
	Package and Deployment Wizard creates a Package folder that contains the setup
	program files and .cab files. In addition, the Package folder contains a Support
	subfolder that includes all the uncompressed versions of the files to be
	distributed.
	
	When you specify a disk drive for the destination of the Package folder, you
	quickly run out of disk space because the Package and Deployment Wizard copies
	the contents of the Support folder in addition to the setup files.
	
	RESOLUTION
	==========
	
	After you create the setup package on a hard drive (or other mass storage media)
	with sufficient free space, use the Deploy option of the Package and Deployment
	Wizard to copy the setup files to the disks.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate the problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Package and Deployment Wizard.
	
	2. In the Select Project text box, type the name of your project or use the
	  Browse option to find your project.
	
	3. Click Package, and then click Next.
	
	4. In the "Package and Deployment Wizard - Package Type" dialog box, select
	  Standard Setup Package and then click Next.
	
	5. In the "Package and Deployment Wizard - Package Folder" dialog box, select
	  the A: drive (assuming A: is a 1.44 floppy disk drive). Place a blank
	  diskette in the A: drive, and click Next.
	
	  If the diskette in your A: drive contains files, you will receive a warning
	  message notifying you that the files will be overwritten. If you do not want
	  the files on this diskette overwritten, replace the diskette with a blank
	  diskette and then click Yes.
	
	6. In the "Package and Deployment Wizard - Included Files" dialog box, click
	  Next.
	
	7. In the "Package and Deployment Wizard - Cab Options" dialog box, click
	  Multiple Cabs. In the Cab Size list, click 1.44 MB and then click Next.
	
	8. Click Next in all the following dialog boxes and click Finish in the final
	  dialog box.
	
	RESULT: The Package and Deployment Wizard begins copying files. When it runs out
	of disk space, you receive the error message described in the SYMPTOMS section
	of this article.
	
	REFERENCES
	==========
	
	MSDN Library Visual Studio 6.0: Visual Basic Documentation; Using Visual Basic;
	Programmer's Guide (All Editions); Part2: What Can You Do With Visual Basic?;
	Distributing Your Applications; Application Packaging with the Wizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
