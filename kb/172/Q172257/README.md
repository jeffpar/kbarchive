---
layout: page
title: "Q172257: Installing Perl 5 from the Windows NT 4.0 Resource Kit"
permalink: /kb/172/Q172257/
---

## Q172257: Installing Perl 5 from the Windows NT 4.0 Resource Kit

{% raw %}

	Article: Q172257
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to install the Perl 5 Scripting Language from the
	Microsoft Windows NT 4.0 Resource Kits.
	
	MORE INFORMATION
	================
	
	Microsoft Press recommends using the Resource Kit Setup program to install Perl
	to your system.
	
	Installation Instructions Using the Resource Kit Setup
	------------------------------------------------------
	
	To install Perl using the Resource Kit Setup program, follow these steps:
	
	1. Insert the Resource Kit Tools and Utilities disc into your CD-ROM drive.
	
	2. At the Resource Kit screen, click Install Resource Kit, and then click Accept
	  to accept the Resource Kit license agreement.
	
	3. Select a Custom installation.
	
	4. In the Custom/Complete installation dialog box click to select File/Batch
	  Tools, and then click Change Option.
	
	5. Click the Perl Scripting Language check box to select it, and then click OK.
	
	6. Click Continue. Follow the directions on the screen to continue through the
	  Setup process.
	
	Manual Installation
	-------------------
	
	If you choose to install Perl manually, rather than by using the Resource Kit
	Setup, follow these steps:
	
	1. Copy the directory tree located at, \Source\Gnu\Perl to your hard drive.
	
	2. From the Perl folder on your hard drive, run Install.bat to install Perl to
	  your system.
	
	NOTE: You cannot install Perl by running Install.bat from the CD-ROM. The
	installation batch file will attempt to write several files to the installation
	directory. Since you cannot write files to a normal CD-ROM, the batch file will
	fail.
	
	
	Further information on the Perl 5 Scripting Language can be found in the
	Readme.doc file located in the root directory of the CD-ROM.
	
	Additional query words: mspress ms_press press ntreskit ntrk install
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
