---
layout: page
title: "Q171342: SMS: Running Office as a Shared SMS Application"
permalink: kb/171/Q171342/
---

## Q171342: SMS: Running Office as a Shared SMS Application

	Article: Q171342
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to install Microsoft Office 4.x, Microsoft Office 95, or
	Microsoft Office 97 as a shared application to be run with Program Group Control
	(PGC). However, each of these versions of Office are somewhat unique in
	installation and behavior when used as a Systems Management Server shared
	application. This article highlights some of the similarities and differences to
	expect between the Office versions.
	
	This article assumes a good working understanding of Systems Management Server
	shared applications. Please refer to the Systems Management Server product
	documentation for information, instructions, and examples of shared
	applications, sharing packages, and Share Package On Server jobs.
	
	MORE INFORMATION
	================
	
	The following setup procedures are consistent across all versions of Office:
	
	1. Run Setup.exe with the "/a" parameter to perform an administrative
	  installation when creating the source directory.
	
	2. Use the latest package definition file (PDF) from
	
	  http://www.microsoft.com/smsmgmt/.
	
	  If the PDF has not been updated, use the PDF supplied with Systems Management
	  Server 1.2, located in the Primsite.srv\Import.src\Enu directory, or the PDF
	  included on your source media.
	
	3. Check the product documentation and Readme.txt files for comments about
	  shared installations in general, and Systems Management Server in particular.
	
	4. Create a separate package and job to send out the Msapps components of Office
	  (such as OrgChart, Microsoft Graph, WordArt, and so on).
	
	  NOTE: The Msapps and MSOffice source and destination directories cannot be the
	  same.
	
	5. You must perform a one-time initial installation. This is specified by the
	  ConfigurationScript entry in the [Program Item Properties] section of the
	  PDF, or the Configuration Command Line in the Program Item Properties dialog
	  box, when setting up the package. If you are installing Office on a computer
	  running Windows NT Workstation, the user must have Administrator rights to
	  run the one-time installation. The one-time installation will make
	  appropriate .ini file and registry changes on the clients, and may copy some
	  files locally to the Windows directory.
	
	6. Any customized modifications to the Office .stf files are not supported by
	  Microsoft.
	
	7. The source media must be a full, unrestricted license version. Limited
	  license versions (such as OEM or MSDN versions) will fail to install
	  correctly.
	
	8. To use the Office toolbar and OLE functions, you must install all of the
	  Office applications.
	
	
	9. Click to check the Run Local Copy If Present option in the Package
	  Properties.
	
	Microsoft Office 4.2x and 4.3
	-----------------------------
	
	PDFs are available for Office 4.2a, 4.2c, 4.3 and 4.3c. Use the Msapps.pdf file
	for the Msapps package.
	
	Office 4.x requires the appropriate Smsproxy directory (located in the
	Primsite.srv\Import.src\Enu directory) to be copied to the source of the
	administrative share. Smssetup.exe runs the configuration command line.
	
	Program Group Control (PGC) creates an icon for each Office application when the
	user's User Groups are enumerated. As the user clicks on each application, the
	application runs its own one-time installation as described above. You must run
	the one-time installation for each Office application (that is, once for
	Microsoft Word, once for Microsoft Excel, once for Microsoft Access, and so
	on).
	
	Microsoft Office 95
	-------------------
	
	PDFs are available for Office 95 and 95a. The Office Standard PDF is Ofs95.pdf.
	The Office Professional PDF is Ofp95.pdf. Use the Msapps32.pdf for the Msapps
	package.
	
	Office 95 does not use SMSPROXY. Smsacm32.exe runs the configuration command line
	for Office 95.
	
	Program Group Control creates a single MSOffice icon when the user's User Groups
	are enumerated. When the user double-clicks the icon, the one-time installation
	runs for all Office applications at once and creates the program items for each
	application.
	
	Microsoft Office 97
	-------------------
	
	You must download the Office 97 Professional PDF (Of97prof.pdf) and the Msapps
	PDF (Msapps97.pdf) for sharing from
	
	  http://microsoft.com/smsmgmt/pdfs.htm.
	
	the Office 97 Resource Kit includes additional PDFs for specific applications and
	the Office 97 Standard version.
	
	Office 97 does not use SMSPROXY. Smsacm32.exe runs the configuration command line
	for Office 97.
	
	A white paper called "Using Microsoft Systems Management Server to Install Office
	97" is available at
	
	  http://www.microsoft.com/smsmgmt.
	
	Download this paper and read it for step-by-step instructions.
	
	Running Office 97 as a shared application requires Systems Management Server 1.2
	Service Pack 1 or later.
	
	
	With client computers running Windows NT, the one-time Office 97 Setup installs
	the icons in a global (All Users) group. This means that the program items are
	not generated dynamically for each user, and it is up to you to monitor your own
	Office license usage. Also, the shortcuts for the program items point to the UNC
	name for the distribution share from which the one-time installation was run,
	and the applications will always run from that share. Load-balancing will not be
	performed (as it is with Appstart in Office 95 or Office 4.x), and if the
	distribution server is unavailable for some reason, the Office 97 shared
	application will fail to start.
	
	
	In Systems Management Server 1.2, Windows 95 introduced the Network Naming
	Provider (NNP) to dynamically choose a distribution server. If the distribution
	server is unavailable, another distribution server will be chosen.
	
	The following list contains additional articles in the Microsoft Knowledge Base
	that may be of interest:
	
	Q168599: SMS: Brief Overview of PGC for Windows 95 clients in SMS 1.2
	Q135690: SMS: PDF For Office 4.3 Does Not Support Office 4.3c
	Q140055: Installing Office 95 using Systems Management Server
	Q140144: SMS: Clipart Gallery Must be Downloaded Every Windows Session
	Q159477: SMSLS or PGC Stop Responding When Programs in Startup Group
	Q161920: SMS: Program Group Control Fails to Set Up Localized Office 95
	Q157819: SMS: Windows NT Cannot Run Office 97 as Shared Application
	Q161604: SMS: PGC Application Is Reset with a "Configure" Status
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
