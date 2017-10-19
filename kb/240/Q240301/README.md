---
layout: page
title: "Q240301: HOWTO: Use the MSDN Library Successfully with Terminal Server"
permalink: /kb/240/Q240301/
---

## Q240301: HOWTO: Use the MSDN Library Successfully with Terminal Server

	Article: Q240301
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminal Services can be used with Windows NT 4.0 Server Terminal Server Edition
	as well as Windows 2000 Server. This article describes the best way to install
	and use the MSDN Library with Terminal Server. It also covers some known issues
	of MSDN installation on Terminal server.
	
	MORE INFORMATION
	================
	
	On Windows 2000 Server, you have the option of installing the Terminal Services
	feature at a later time. Before doing this uninstall all MSDN Libraries on the
	system so that you can reinstall them properly after Terminal Services have been
	enabled.
	
	Installation
	------------
	
	You must place Terminal Server into Install mode before installing the MSDN
	Library. This can be done by using the Add/Remove Programs application from the
	Control Panel. Please see the following Knowledge Base article for more detailed
	information on this step:
	
	  Q240302 PRB: MSDN Library Setup fails on Terminal Server in Execute mode
	
	There are different considerations for how the MSDN Library is installed when
	multiple users are remotely accessing it. With the standard setup, the content
	is located on the CDs. A remote user cannot replace disc 2 on the server with
	disc 3. Also, the disc must be present in the server's CD-ROM drive at all
	times.
	
	Copy the MSDN CDs to the server's hard drive or to a network location. When
	installing off of the server's hard drive or a network location, all MSDN
	Library information points to the server rather than to a disc. Use the
	following steps to do this:
	
	1. Create a shared folder and give read permission to the users.
	
	2. Copy all files and subfolders from the MSDN Library Disc 1 to the target
	  folder.
	
	3. Copy Msdn332.inf from the root of Disc 2 to the root of the target folder.
	
	4. Copy all files from the \MSDN subdirectory on Disc 2 into the \MSDN directory
	  of the target folder.
	
	5. Copy Msdn333.inf from the root of Disc 3 to the root of the target folder.
	  Note that the MSDN Library that ships with Visual Studio 6.0 does not have a
	  third disk, so this step and the next step can be skipped.
	
	6. Copy all files from the \MSDN folder on Disc 3 into the \MSDN directory of
	  the target folder.
	
	7. Run Setup on the server computer using the Typical setup option. An
	  Administrator, who is logged onto the server locally, needs to do this step.
	  You must use the Add/Remove Programs application in the Control Panel to
	  launch the setup. If AutoRun starts the setup when the CD is inserted, exit
	  setup and allow the Add/Remove Programs application to find Setup.exe and
	  launch it.
	
	8. At this point, all files will have the read-only attribute set, which is
	  inconvenient for the sample files. To alleviate this problem, run the
	  following command from a prompt on the target folder and all contained
	  subfolders (this may take a while, given the large number of files
	  involved):
	
	  attrib -r *.* /s
	
	  NOTE: After running this command, the folders will still have the read-only
	  attribute set.
	
	9. On Windows NT 4.0 Terminal Server Edition, additional steps are needed for
	  the MSDN Library to work correctly for each user. See the following Knowledge
	  Base article for more details:
	
	  Q195878 PRB: MSDN Help Cannot Find msdn*.col File on Terminal Server
	
	10. Verify that the MSDN Library installation succeeded by logging on remotely
	  using the Terminal Services Client.
	
	Other Installation Strategies
	-----------------------------
	
	You can perform a full install of the MSDN Library using the Add/Remove Programs
	application. This eliminates most of the CD problems, except many of the samples
	remain on the CD even after a full install.
	
	Another strategy would be to have multiple local CD-ROM drives on the server that
	would hold each MSDN Library CD. Along the same lines, one DVD drive that holds
	the DVD version of the MSDN Library would work as well.
	
	Optimizing the Terminal Services Client
	---------------------------------------
	
	The MSDN Library performs best if the Terminal Services Client is set to Enable
	Data Compression and to Cache Bitmaps. Older versions of the Terminal Services
	Client list this option as Low Speed Connection.
	
	Additional Considerations
	-------------------------
	
	Following are some additional things you should consider when using the MSDN
	Library on Terminal Server:
	
	- Make sure that sufficient licenses have been purchased to cover the number of
	  users connected to the server. See the End User License agreement for more
	  details.
	
	- The network computer should be able to handle the required number of
	  concurrent client connections.
	
	- The server should have enough bandwidth to handle the anticipated load.
	
	- The network computer should not use a compressed file system, unless this is
	  commensurate with the hardware and the anticipated load.
	
	Limitations
	-----------
	
	The following are some limitations of using the MSDN Library on Terminal Server:
	
	- Setup only places the MSDN Library icon on the desktop of the user who
	  installed the MSDN Library on the server.
	
	- Multiple language versions of the MSDN Library on Terminal Server are not
	  supported, which can result in corrupt subset information.
	
	- Problems can occur if one user has multiple client sessions open on the
	  server with the same version of the MSDN Library open on each. If changes are
	  made to media locations or subset information, only the changes of the MSDN
	  Library that is closed last are saved.
	
	REFERENCES
	==========
	
	For more information, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q195878 PRB: MSDN Help Cannot Find msdn*.col File on Terminal Server
	
	  Q240302 PRB: MSDN Library Setup fails on Terminal Server in Execute mode
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall Problems
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
