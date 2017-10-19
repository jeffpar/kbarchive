---
layout: page
title: "Q190046: INFO: VB6 Readme: Part 6 Wizard Issues"
permalink: /kb/190/Q190046/
---

## Q190046: INFO: VB6 Readme: Part 6 Wizard Issues

	Article: Q190046
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbreadme kbwizard kbtophit kbActiveX kbAppSetup kbInternet kbMDAC kbVBp kbVS600 kbWebSe
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below includes the documentation and workarounds for Visual
	Basic 6.0. This information can also be found in the README.htm file that ships
	with Visual Basic 6.0 on the Visual Basic 6.0 CD-ROM. Please see the REFERENCES
	section of this article for a list of the Microsoft Knowledge Base articles
	relating to the Visual Basic 6.0 readme.
	
	Following is a list of all parts of the readme file:
	
	Part 1. Important Issues Please Read First!
	Part 2. Data Access Issues and DataBinding Tips.
	Part 3. Control Issues.
	Part 4. Language Issues.
	Part 5. Samples Issues.
	Part 6. Wizard Issues.
	Part 7. Error Message Issues.
	Part 8. WebClass Designer Issues.
	Part 9. DHTML Page Designer Issues.
	Part 10. Extensibility Issues.
	Part 11. Miscellaneous Issues.
	Part 12. Microsoft Transaction Server (MTS) Issues.
	Part 13. Dictionary Object.
	Part 14. Visual Component Manager.
	Part 15. Application Performance Manager.
	
	MORE INFORMATION
	================
	
	Package and Deployment Wizard (PDW):
	
	Automatically Picks Up Files From Redist Directory
	----------------------------------------------------------------------------------------
	
	A new feature of the Package and Deployment Wizard is its ability pick up files
	from the Redist folder. An example of how the feature is used would follow the
	steps below:
	
	1. You have created an application that is ready for packaging.
	
	2. The application depends on a certain system file "MySysFile.dll" which, until
	  recently, has been a stand-alone file. But now a recent system update has
	  made that file dependent on other files to function properly.
	
	3. However, a stand-alone version of the system file is also supplied.
	
	4. To simplify setups, you place that stand-alone version into the Redist
	  folder.
	
	5. When creating your deployment package, you navigate to the system file to
	  instruct the wizard that the system file should be included.
	
	6. Instead of picking up the system file (which is dependent on other files),
	  the Package and Deployment Wizard will pick up the stand-alone version that
	  is in the Redist directory.
	
	  By default, no files are placed in the redist folder.
	
	Package and Deployment Wizard Has [Do Not Redist] Section
	---------------------------------------------------------
	
	A new section has been added to the Package and Deployment VB6Dep.ini file: [Do
	Not Redist]
	
	Two kinds of files are listed under the new section:
	
	1. Files that are not needed at run-time. For example, ActiveX designers often
	  require two file references, one for design-time, and one for run- time.
	  Since the design-time reference is not needed, it is listed in the section
	  and is not included in the package.
	
	2. Files that cannot be redistributed by the Package and Deployment Wizard. Some
	  dependent files are not installed by Visual Basic, but must be installed by
	  another component. For example, the following files are installed by Internet
	  Explorer 4.x: Shdocvw.dll and Mshtml.dll.
	
	Package and Deployment Wizard: In Silent Mode the Notification
	Window May Not Be First in the Window Z-order
	------------------------------------------------------------------------------------------------------------
	
	With Visual Basic, it is possible to run the Package and Deployment Wizard in
	silent mode from a command prompt. When doing so, you can also set a path for
	logging the wizard's output (/l ). With the path set, the wizard will create a
	log of events. If you do not use the argument, the wizard will instead display a
	dialog box to notify you of the wizard's completion. However, the window is not
	always obvious because it may be underneath other windows. In order to see it,
	you may need to close or minimize all other windows.
	
	For more information, search online for "running as a stand-alone" in Visual
	Basic Concepts in the MSDN Library Visual Studio 6.0 documentation.
	
	Package and Deployment Wizard: Command Line Mode Argument Added for
	Specifying Executable Path
	----------------------------------------------------------------------------------------------
	
	An argument has been added to the command line mode of the Package and Deployment
	Wizard. The argument is shown in the table below:
	
	Argument       Description
	
	/e path        Use the argument to set the path for the project's
	              executable file if it is different from the project's
	              path.
	
	The argument allows the command line mode to be used in a multi-developer
	environment where a computer is dedicated to compiling the project and creating
	the package.
	
	For more information, search online with Package and Deployment Wizard selected,
	for running as a stand-alone in the MSDN Library Visual Studio 6.0
	documentation.
	
	Package and Deployment Wizard: Manually Add User Control License Files
	----------------------------------------------------------------------
	
	When creating a package for a user control that requires a license key, the
	license file (.vbl) is not automatically included. Instead, you must add the
	file manually.
	
	When you are at the dialog titled "Package and Deployment Wizard Included Files,"
	click the Add button and search for the appropriate .vbl file.
	
	Package and Deployment Wizard: Steps in the Web Deployment Process
	------------------------------------------------------------------
	
	When you post an Internet package to a Web server using the Package and
	Deployment Wizard, the wizard uses a technology known as WebPost to copy your
	package to the server and process it appropriately. These are the steps that the
	WebPost process goes through when processing your .cab:
	
	1. It extracts the .cab file into a temporary directory.
	
	2. It locates the .inf file for the .cab file.
	
	3. Based on the contents of the .inf file, the WebPost process installs
	  application files (based on the RInstallApplicationFiles section of the .inf
	  file), installs system files (based on the RiinstallSystemFiles section), and
	  installs shared files (based on the RInstallSharedFiles section). In the
	  process, it registers any necessary files.
	
	NOTE: The DefaultInstall section of the .inf file is not run, because the
	instructions it contains often require user input. The WebPost process also does
	not create a virtual directory for your application, if one is required;
	directories must be set up in advance.
	
	Package and Deployment Wizard: Web Deployment Tips for HTTP or FTP Protocol
	---------------------------------------------------------------------------
	
	- If the .cab file you are attempting to deploy to a Web server is copied to
	  the server but is not unpacked, make sure you included the .cab file on the
	  Items to Deploy screen, and that you used HTTP Post as the protocol on the
	  Web Publishing Site screen. In addition, you must have checked the Unpack and
	  Install Server-Side Cab check box on the Web Publishing Site screen. If you
	  did not, try re-deploying your package again with this option selected.
	
	  NOTE: Cab unpacking is supported by Posting Acceptor 2.0 running on IIS 4.0.
	  If you receive an error saying that the Web server you selected does not
	  support the service provider you selected, there are several things you can
	  do to try to fix this problem:
	
	   - If you are using the HTTP Post protocol, make sure that Posting Acceptor
	     is installed on your Web server. If you are running IIS 4.0, install
	     Posting Acceptor 2.0. If you are running IIS 3.0, install Posting Acceptor
	     1.0. Cab unpacking is not supported by Posting Acceptor 1.0.
	
	   - Ensure that your URL is correct. If you are using HTTP Post, ensure that
	     your URL begins with "http://". If you are using FTP, ensure that your URL
	     begins with "ftp://".
	
	   - If you are uploading to a server location that has Posting Acceptor 1.0
	     installed, you cannot select the option to unpack and install your cabinet
	     files when you deploy your package using the wizard. If you receive an
	     error C0042115 that the query string INSTALL is invalid, check your server
	     configuration to determine what version of posting acceptor is installed.
	     If it is version 1.x, deploy your cab again, making sure to deselect the
	     Unpack and Install Server-Side Cab option.
	
	   - If you need to use the FTP protocol to post to a URL beginning with
	     "http://", you may be able to resolve this error by adding the following
	     entry to the end of your Web server's postinfo.asp file, usually located
	     in the scripts directory on the Web server:
	     [{02B5E1D1-8B7C-11D0-AD45-00AA00A219AA}] ServerName=" <%=
	     Request.ServerVariables("SERVER_NAME") %>"
	
	- MDAC installation requires DCOM95 to be installed. Setup programs created
	  with the Package and Deployment Wizard install the Microsoft Data Access
	  Components (MDAC), which includes OLE DB, ADO and Jet, via the MDAC installer
	  program: Mdac_typ.exe. This EXE requires that the machine being installed to
	  have DCOM95 (or the newer DCOM98) installed on it.
	
	  If the MDAC intaller fails with a "DLL registration failed" message, this is
	  because DCOM was not found on the machine. To restore functionality of
	  existing data components, install DCOM95 and run the installer again.
	
	- If you use the HTTP Post protocol and receive an error that you do not have
	  write access for the Web server, open the Internet Service Manager on the
	  server computer, access the node for your Default Web Site (Console Root \
	  Internet Information Server \ machinename \ Default Web Site), choose
	  Properties, select the Home Directory tab, and check the Write check box.
	
	- If your files are read-only when you try to post, you will receive an error
	  C0042116 announcing that processing has stopped. Change your file attributes
	  to proceed.
	
	- Be aware that if you post a file to a directory where the same file already
	  exists, the file on the server will be overwritten and no warning message
	  will be displayed.
	
	- If you use the FTP protocol and receive an error that access is denied, open
	  the Internet Service Manager on the server computer, access the node for your
	  Default FTP Site (Console Root \ Internet Information Server \ machinename \
	  Default FTP Site), choose Properties, select the Home Directory tab, and
	  check the Write check box.
	
	- If you use the FTP protocol and receive additional errors besides the one
	  described in the previous bullet, make sure that you have properly configured
	  your FTP service on the Web server. To do so, start the Microsoft Management
	  Console (MMC), then follow these steps:
	
	1. Right-click on Default FTP Site and choose New Virtual Directory.
	
	2. Enter an alias to be used to access the virtual directory, then click Next.
	
	3. Enter the physical path of the directory to which to map the virtual
	  directory (for example, c:\inetpub\ftproot) then click Next.
	
	4. Select the appropriate access permissions, making sure to allow write access
	  so that your deployments can proceed without errors, then click Finish.
	
	5. Right-click on Default FTP Site and choose Stop.
	
	6. Right-click on Default FTP Site and choose Start.
	
	  When you deploy to the FTP server using the Package and Deployment Wizard, use
	  the site FTP://servername/alias where alias is the alias you assigned in step
	  2. Use the username "anonymous" and the password "me@somewhere" for anonymous
	  login.
	
	Package and Deployment Wizard: Start Menu Items: Run Option Not Supported
	-------------------------------------------------------------------------
	
	When creating a package for deployment, you can also create a Start menu item.
	Although it is mentioned in the Help topic for the dialog box, the Run option is
	not supported.
	
	System Configurations for WebPost's Posting Acceptor
	----------------------------------------------------
	
	When you deploy your packages to a Web server, the Package and Deployment Wizard
	uses a technology known as WebPost to move your files to the desired location.
	WebPost consists of two main components:
	
	- The Package and Deployment Wizard, which sends your content to a qualified
	  site.
	
	- A Posting Acceptor, located on the Web server, that enables the posting of
	  content to an IIS server.
	
	There are multiple versions of Posting Acceptor available. You must make sure you
	install the correct version on your Web server based on your machine
	configuration. The following table lists the appropriate configurations:
	
	Use this                  if you are running        Comments
	--------------------------------------------------------------------------
	Posting Acceptor 2.0     Windows NT 4.0 with SP3   Posting Acceptor 2.0
	IIS 4.0                                            supports both content
	
	                                                  posting and the
	                                                  unpacking of cabinet
	                                                  (.cab) files on the
	                                                  server.
	
	Posting Acceptor         1.0 Windows NT 4.0        You cannot unpack .cab
	                        with SP3                  with this version
	                        IIS 3.0                   files of posting
	                                                  acceptor. Use this for
	                                                  content posting only.
	                                                  You can move your
	                                                  files to the server
	                                                  and then manually
	                                                  register any necessary
	                                                  files that would have
	                                                  been registered by the
	                                                  .cab process.
	
	NOTE: Posting Acceptor does not work on any platforms that are using Personal Web
	Server or Peer Web Server. You must use IIS. Steps for installing Microsoft
	Posting Acceptor 2.0 if you have Visual Studio or Visual Basic Enterprise
	Editions.
	
	1. Launch Visual Studio or Visual Basic setup from your installation CDs.
	
	2. When prompted to choose options to install, click Install Server Applications
	  and Tools, then click Next.
	
	3. Click Launch the BackOffice Installation Wizard, then click Install.
	
	4. Now select the radio button for Custom, then click Next. You will see the
	  options to install and their sizes. Click Next.
	
	5. Select Microsoft Posting Acceptor 2.0.
	
	You can install Posting Acceptor 2.0 from the Deploy folder of Visual Studio
	installation CD number 2. Posting Acceptor 1.0 can be installed from the
	Microsoft Posting Acceptor Information Website. If you want to install Posting
	Acceptor 2.0 on a computer that already has the Windows NT Option Pack, you
	should first check to see if version 1.0 of the Posting Acceptor is already
	installed. If so, remove it before installing version 2.0. To determine if 1.0
	is installed, select the NT Option Pack on the Add/Remove Programs mechanism of
	the Control Panel. Click Add/Remove, then look for Posting Acceptor 1.0 among
	the components listed. You may find it under Microsoft Site Server. If it is
	installed, remove it. You can then install version 2.0 by running PASetup.exe.
	
	Package and Deployment Wizard: Edit Setup.lst File If You
	Rebuild Cabs From Batch File
	--------------------------------------------------------------------------------------
	
	After creating a standard setup package using the Package and Deployment Wizard,
	you can manually recreate the setup files (Setup.exe, Setup.lst, and all .cab
	files) by running the batch file found in the in the Support folder. Doing this
	allows you to manually customize the package or to recreate a package without
	running the wizard again. Running the batch file will copy setup.exe and
	setup.lst from the Support folder to the Package folder and will generate the
	cab file(s) in the Package folder. However, once the batch file is finished,
	setup.lst will not know how many .cab files were generated. Unless this problem
	is remedied, the setup program will fail.
	
	To remedy this situation, do the following:
	
	1. Before running the batch file, delete all .cab files in the Package folder.
	
	2. After running the batch file, count the number of cabs produced by the batch
	  operation.
	
	3. Open the Setup.lst file in the Package folder with a text editor. NOTE: There
	  are two Setup.lst files. One is found in the Support folder. The second is
	  found outside the Support folder, in the Package folder where the .cab files
	  are created. Be sure to open the Setup.lst file in the Package folder.
	
	4. In the text editor, look for the following lines, which are at the top of the
	  file):
	
	     [Bootstrap]
	     SetupTitle=Install
	     SetupText=Copying Files, please stand by.
	     CabFile=Projec1.CAB
	     Spawn=Setup1.exe
	     Uninstal=st6unst.exe
	     TmpDir=msftqws.pdw
	
	5. After the last line (TmpDir=msftqws.pdw), insert the following line where N
	  equals the number of cabs generated:
	
	  Cabs=N
	
	The Setup.lst should now be up to date, and the setup won't fail.
	
	Package And Deployment Wizard: Error 80042114
	---------------------------------------------
	
	If you are creating a package for Internet deployment and you get the following
	error:
	
	  "Unexpected error 80042114 has occurred: The Web server you selected does not
	  indicate support for the service provider you selected. Do you want to
	  proceed anyway?"
	
	This error occurs because you have specified that your package should be posted
	to an FTP site using an HTTP URL. If you are certain that you have access
	privileges to the web server, you can click "Yes" and the deployment will
	proceed.
	
	To avoid this error in the future, when creating a package for deployment on the
	same server, specify the site and its protocol. When you do so, the following
	dialog box will appear:
	
	"The specified URL and publishing method can be saved in the registry as a Web
	publishing site. This ensures that the URL and publishing method are valid and
	saves you time in future deployments to this site. Do you want to store this
	information as a Web publishing site?"
	
	If you select "yes," this saves the site information and you will no longer
	receive the 80042114 error.
	
	Package and Deployment Wizard: Use Mdac_typ.Cab and Mdac20.Cab to
	Distribute Data Access Components
	---------------------------------------------------------------------------------------------------
	
	When your Internet Package includes any of the following four files, the wizard
	will by default set these files to be downloaded from:
	
	http://activex.microsoft.com/controls/vb6/mdac_typ.cab
	
	MSDAOSP.dll
	MSADO15.dll
	MSADCF.dll
	ODBC32.dll
	
	Similarly, the wizard will, by default, set the following files to be downloaded
	from:
	
	http://activex.microsoft.com/controls/vb6/mdac20.cab
	
	MSADOR15.dll
	MSADCO.dll
	
	In both cases, these defaults are indicated as the "Download from Microsoft Web
	site" option on the File Source screen. These cab files (mdac_typ.cab and
	mdac20.cab) perform special handling that should not be attempted manually. In
	order to ensure that the proper handling takes place, your Internet cab should
	not include these files but rather should reference the cabs. Therefore, you
	should never choose the "Include in this cab" option for any of these files. In
	addition, if you choose the "Download from alternate Web site" option, you
	should be careful to specify cabs that are copies of these cabs to ensure that
	the proper handling takes place.
	
	Do not change the default settings for these files.
	
	Package and Deployment Wizard: Manually Include .ASP and .HTM Files
	For IIS Applications When Using Standard Setup
	------------------------------------------------------------------------------------------------------------------
	
	If you use the Package and Deployment Wizard's standard setup to deploy an IIS
	application, you must manually include any .asp or .htm files with the package.
	Add the files using the Include Files dialog box.
	
	Package and Deployment Wizard: Bad Date and Time Formats
	--------------------------------------------------------
	
	In certain situations, the Package and Deployment Wizard will incorrectly write
	time and date information to the Setup.lst file. When this occurs, the setup
	will fail because the dates will be written in a form that the setup.exe can't
	read. The problem occurs when you create a deployment package using the US
	version of Visual Basic on:
	
	- A computer using the German version of Windows (NOTE: the German version of
	  Visual Basic will work correctly.)
	
	- Any computer where the date separator isn't either a forward slash ("/") or a
	  dash ("-").
	
	To fix the bad formats:
	
	1. From the Start menu, open Control Panel.
	
	2. Click the Regional Settings icon.
	
	3. On the Date tab, change the Date separator to "/".
	
	4. On the Time tab, change the Time separator to ":".
	
	5. Run the Package and Deployment Wizard.
	
	6. Restore the date and time settings.
	
	Package and Deployment Wizard: Unable to Run Setup.exe on
	First Windows 95 Version
	----------------------------------------------------------------------------------
	
	Any setup package built with the wizard will not launch on certain installations
	of Windows 95 due to lack of support for an API in the original version of the
	Oleaut32.dll. This failure will not occur on OS release 2 of Windows 95 or any
	versions of Windows NT 4.0 and later, and will not occur if Microsoft Office 97
	or Internet Explorer 3.0 or 4.0 has been installed. Any installation of a Visual
	Basic 5.0 application will also remedy the situation. You can also work around
	this failure by first overwriting the older version of Oleaut32.dll with the
	latest version. Be sure to shut down all applications before attempting to
	manually update Oleaut32.dll.
	
	Package and Deployment Wizard: Packaging ActiveX Documents
	----------------------------------------------------------
	
	The Visual Basic 6.0 Package and Deployment Wizard can insert CODEBASE= and
	VERSION= information directly embedded into the .vbd file for your ActiveX
	Document project. This eliminates the need for having the extra .htm file
	previously used to launch ActiveX Documents. The embedded information allows
	Internet Explorer to read the .cab file name for your ActiveX Document code and
	version information from the .vbd file and carry out the installation. You can
	now navigate directly to the .VBD file and your User document code will download
	if necessary.
	
	The same functionality was available for Visual Basic 5.0 setup using the
	SetCodeBase utility found on the Visual Basic Owners Area.
	
	The following are some issues with Visual Basic 6.0 Package and Deployment Wizard
	generated setups for User documents:
	
	- Internet Explorer 3.x. 4.0, and 4.01 cannot read the embedded information in
	  the VBD file. The wizard also generates an old (VB5) style .htm file. This
	  .htm file can be used to launch ActiveX Documents. You must first modify the
	  .htm file, however, since most of the code is commented out. After removing
	  the comments and an extra <A> tag (<a
	  href=xxxx.VBD>xxxxx.VBD</a>) from the top, from the top, the file
	  will only be an OBJECT tag with the CLSID of your User document and some
	  script code for Window_OnLoad event.
	
	- Internet Explorer 4.01 with Service Pack 1 and later will read this
	  information correctly from the .vbd file.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q170164 INFO: VB 6.0 Readme Part 1: Important Issues Read First!
	
	Q170163 INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	Q170162 INFO: VB 6.0 Readme Part 3: Control Issues
	
	Q170161 INFO: VB 6.0 Readme Part 4: Language Issues
	
	Q170160 INFO: VB 6.0 Readme Part 5: Samples Issues
	
	Q170158 INFO: VB 6.0 Readme Part 7: Error Message Issues
	
	Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	Q170154 INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	Q170157 INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	Q170156 INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	Q191792 INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	Q191791 INFO: VB 6.0 Readme Part 14: Visual Component Manager
	
	Q191790 INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbreadme kbwizard kbtophit kbActiveX kbAppSetup kbInternet kbMDAC kbVBp kbVS600 kbWebServer kbFAQ kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
