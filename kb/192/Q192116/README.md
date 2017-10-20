---
layout: page
title: "Q192116: HOWTO: Configure Posting Acceptor to Work with the PDW"
permalink: /kb/192/Q192116/
---

## Q192116: HOWTO: Configure Posting Acceptor to Work with the PDW

{% raw %}

	Article: Q192116
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbWebClasses kbFAQ kbVBp600FAQ
	Last Modified: 27-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic Package and Deployment Wizard (PDW) uses a technology named the
	Posting Acceptor to manage the transfer of your Visual Basic applications to a
	Web server. Posting Acceptor is a component that is located on the Microsoft
	Internet Information Server (IIS) Web server. You can use Posting Acceptor to
	post the content to the server. Before you can successfully post your
	applications, you must install Posting Acceptor and configure the Web server
	correctly.
	
	This article walks you through the basic configuration and presents
	troubleshooting information for some of the more common problems that you may
	experience when you post Visual Basic applications to the Web.
	
	MORE INFORMATION
	================
	
	Steps in the Web Deployment Process
	-----------------------------------
	
	When you post a Visual Basic application to a Web server by using the Package and
	Deployment Wizard, you first use the packaging portion of the wizard to package
	your applications into one or more .cab files. Then, you use the deployment
	portion of the wizard to transfer your files to the appropriate location.
	
	IMPORTANT: Make sure that you have administrator-level rights to the Web server
	to which you are posting content.
	
	The Web server goes through these steps during deployment:
	
	1. It extracts the .cab file into a temporary directory.
	
	2. It locates the .inf file for the .cab file.
	
	3. Based on the contents of the .inf file, it installs application files (based
	  on the RInstallApplicationFiles section of the .inf file), system files
	  (based on the RIinstallSystemFiles section), and shared files (based on the
	  RInstallSharedFiles section). In the process, the server registers any
	  necessary files.
	
	NOTE: The DefaultInstall section of the .inf file is not run because the
	instructions it contains often require user input. Additionally, the posting
	process does not create a virtual directory for your application if one is
	required; directories must be set up in advance.
	
	Installing Posting Acceptor
	---------------------------
	
	You must install Posting Acceptor on any server to which you want to post
	applications by using the Visual Basic Package and Deployment Wizard. There are
	multiple versions of Posting Acceptor. You must make sure you install the
	correct version based on your server's configuration:
	
	- Posting Acceptor 2.0 Windows NT 4.0 with Service Pack 3 (SP3) IIS 4.0 Posting
	  Acceptor 2.0 supports both content posting and the unpacking of cabinet
	  (.cab) files on the server.
	
	- Posting Acceptor 1.1 Windows NT 4.0 with SP3 IIS 3.0 You cannot unpack .cab
	  files with this version of Posting Acceptor. Use this version to post content
	  only. You can move your files to the server and then manually register any
	  necessary files that the .cab process would have registered.
	
	NOTE: Posting Acceptor does not work on any platforms that are using Personal Web
	Server or Peer Web Server. You must use IIS.
	
	Posting Acceptor is no longer available as a separate download. To obtain Posting
	Acceptor, you can install the Microsoft Windows NT 4.0 Option Pack, which is
	available from the following Microsoft Web site:
	
	  Windows NT 4.0 Option Pack
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/NT4OptPk/
	
	Installing Posting Acceptor 2.0:
	
	1. Start Microsoft Visual Studio or Visual Basic setup from your installation
	  CDs.
	
	2. When you are prompted to choose options to install, click "Install Server
	  Applications and Tools", and then click Next.
	
	3. Click "Launch the BackOffice Installation Wizard", and then click Install.
	
	4. Click Custom, and then click Next.
	
	5. You will see the options to install and their sizes. Click Next.
	
	6. Click "Microsoft Posting Acceptor 2.0".
	
	NOTE: If you want to install Posting Acceptor 2.0 on a computer that already has
	the Windows NT Option Pack, you should first check to see if version 1.0 of the
	Posting Acceptor is already installed. If so, remove this version before you
	install version 2.0.
	
	Determine If Posting Acceptor 1.0 Is Installed:
	
	1. In Control Panel, click Add/Remove Programs.
	
	2. In the Install\Uninstall pane, click NT Option Pack.
	
	3. Click Add/Remove, and then look for Posting Acceptor 1.0 in the component
	  list. You may find Posting Acceptor 1.0 under Microsoft Site Server. If
	  Posting Acceptor 1.0 is installed, remove it.
	
	Configuring the Server
	----------------------
	
	You must perform the following steps on the Web server to which you want to
	deploy your packaged Visual Basic applications. To configure your IIS server,
	follow these steps:
	
	1. Install Microsoft Internet Information Server (IIS) from the NT Option Pack.
	
	2. Follow the steps in the previous procedure to install Posting Acceptor 2.0.
	
	3. Click Start, point to Programs, point to Windows NT 4.0 Options Pack, point
	  to Microsoft Internet Information Server, and then click Internet Service
	  Manager.
	
	4. In the left panel of the manager, make sure that the Console Root node is
	  expanded, and then expand the Internet Information Server node. Your IIS
	  server or servers are listed under this folder.
	
	5. Expand the IIS server that you want to configure. You will see a number of
	  nodes, including a node named Default Web Site.
	
	6. Right-click the Default Web Site node, and then click Properties.
	
	7. In the "Default Web Site Properties" dialog box, click the Home Directory
	  tab, and then make sure that the Write option is selected.
	
	8. Click Apply. The Inheritance Overrides dialog box may appear, which contains
	  a list of folders to which the setting you just made should apply. Select
	  only those folders to which you want users to be able to deploy packages, and
	  then click OK until you return to the manager.
	
	NOTE: Granting write access to a virtual directory is a security RISK. Make sure
	that you only grant write access to virtual directories that you know are
	secure.
	
	1. In the left panel, right-click the SCRIPTS node that appears under the
	  Default Web Site node, and then click Properties.
	
	2. Click the Virtual Directory tab, make sure that the "Execute (including
	  script)" button is selected, and then click OK.
	
	Configuring the Client Computer
	-------------------------------
	
	Visual Studio installs and configures all the components that you need to deploy
	applications from your development computer. However, if you are running Visual
	Studio on a computer that is on an intranet and you connect through a proxy
	server, you must configure Microsoft Internet Explorer 4.0 to bypass the proxy
	server for local addresses.
	
	To configure your development computer, follow these steps:
	
	1. On your Windows desktop, right-click the Internet Explorer icon, and then
	  click Properties.
	
	2. In the Properties dialog box, click the Connection tab.
	
	3. In the Proxy Server area, make sure that the "Bypass proxy server for local
	  (Intranet) addresses" check box is selected if the "Access the Internet using
	  a proxy server" check box is selected. Click OK.
	
	Troubleshooting Web Deployment from Visual Basic
	------------------------------------------------
	
	The following sections list some of the more common problems that you may
	encounter when you try to post applications to the server by using the Package
	and Deployment Wizard.
	
	General Tips:
	
	- You should have administrator-level rights to the Web server to which you are
	  posting content.
	
	- If you receive an error that files are busy during the posting process, you
	  should reboot your server rather than just stopping and restarting the
	  service. After you reboot, you can try to post again. In general, it is a
	  good idea to reboot the server as part of your troubleshooting process.
	
	Problem: Your Server Does Not Have Visual Basic Installed:
	
	If your Web server does not have a copy of the Visual Basic 6.0 runtime DLL
	installed and other system files such as:
	
	- Msvbvm60.dll
	- Oleaut32.dll
	- Olepro32.dll
	- Asycfilt.dll
	- Stdole2.tlb
	- Comcat.dll
	- Mswcrun.dll is needed for IIS Applications (WebClass Designer runtime)
	- Mshtmpgr.dll is needed for DHTML Applications (DHTML Page Designer run- time)
	
	You may encounter problems when you try to post an application to it the first
	time. In this case, the server may not be able to correctly install the
	necessary system files.
	
	There are several things that you can do about this:
	
	- Install a copy of Visual Basic on the server, and then use the wizard to post
	  your application again.
	
	- Create a standard setup package with the Package and Deployment Wizard
	  instead of an Internet package. You can then move the Setup.exe file to the
	  server and install the program on the server. This installs the necessary
	  system files. After the installation process, reboot your server.
	
	- You can download the .cab files for the above-needed system files from the
	  Microsoft site. You must install and register these files on the server. You
	  may need to reboot the server after this process.
	
	NOTE: This procedure only applies to the first installation of a Visual Basic
	application on such a server; all subsequent installations can be posted with
	the Web deployment feature of the wizard.
	
	Problem: Cab File Is Copied to Web Server But Is Not Unpacked:
	
	If the .cab file that you are deploying is copied to the server but is not
	unpacked, make sure that:
	
	- You included the .cab file on the Items to Deploy page of the wizard.
	
	- You used HTTP Post as the protocol on the Web Publishing Site page of the
	  wizard.
	
	- You selected the "Unpack and Install Server-Side Cab" check box on the Web
	  Publishing Site page of the wizard. If you did not, try to redeploy your
	  package with this option selected.
	
	NOTE: Only Posting Acceptor 2.0 running on IIS 4.0 supports .cab file unpacking.
	If you are running Posting Acceptor 1.0, you cannot unpack the file during
	deployment.
	
	Problem: Web Server Does Not Support the Selected Service Provider:
	
	There are several things you can do to try to fix this problem:
	
	- If you are using the HTTP Post protocol, make sure that Posting Acceptor is
	  installed on your Web server.
	
	- Make sure that your URL is correct. If you are using HTTP Post, make sure
	  that your URL begins with http://. If you are using FTP, make sure that your
	  URL begins with ftp://.
	
	- If you are uploading to a server that has Posting Acceptor 1.0 installed, you
	  cannot select the option to unpack and install your cabinet files when you
	  use the wizard to deploy your package. In this case, deploy your .cab file
	  again, and make sure that you click to clear the "Unpack and Install
	  Server-Side Cab" check box.
	
	Problem: Need Write Access to the Web Server:
	
	If you use the HTTP Post protocol and receive an error that you do not have write
	access for the Web server, you must change the access permissions for your Web
	server.
	
	To set Write access, follow these steps:
	
	1. On the server computer, click Start, point to Programs, point to Windows NT
	  4.0 Options Pack, point to Microsoft Internet Information Server, and then
	  click Internet Service Manager.
	
	2. Expand the Console Root and the Internet Information Server nodes, and then
	  expand the node for your Web server computer.
	
	3. Right-click the Default Web Site node, and then click Properties.
	
	4. Click the Home Directory tab, and then click to select the Write check box.
	
	NOTE: Granting write access to a virtual directory is a security risk. Make sure
	that you only grant write access to the virtual directories that you know are
	secure.
	
	Problem: Error c0042116, or Processing Has Stopped:
	
	If your files are read-only when you try to post, you receive an error C0042116,
	which states that processing has stopped. Use File Explorer to change your file
	attributes, and then continue with your posting process.
	
	Problem: FTP Protocol Problems:
	
	With the Package and Deployment Wizard, you can post content by using the HTTP or
	the FTP protocol. If you use FTP, you may encounter the following issues:
	
	If you receive an error that access is denied, follow these steps:
	
	1. On the server computer, click Start, point to Programs, point to Windows NT
	  4.0 Options Pack, point to Microsoft Internet Information Server, and then
	  click Internet Service Manager.
	
	2. Expand the Console Root and the Internet Information Server nodes, and then
	  expand the node for your Web server computer.
	
	3. Right-click the Default Web Site node, and then click Properties.
	
	4. Click the Home Directory tab, and then click to select the Write check box.
	
	NOTE: Granting write access to a virtual directory is a security risk. Make sure
	that you only grant write access to the virtual directories that you know are
	secure.
	
	If you use the FTP protocol and receive additional errors besides the one that is
	described in the previous bullet, make sure that you have properly configured
	your FTP service on the Web server. To do so, start the Microsoft Management
	Console (MMC), and then follow these steps:
	
	1. Right-click Default FTP Site, and then click New Virtual Directory.
	
	2. Type an alias to be used to access the virtual directory, and then click
	  Next.
	
	3. Type the physical path of the directory to which to map the virtual
	  directory. For example, C:\Inetpub\Ftproot, and then click Next.
	
	4. Select the appropriate access permissions, making sure to grant write access
	  so that your deployments can proceed without errors, and then click Finish.
	
	5. Right-click Default FTP Site, and then click Stop.
	
	6. Right-click Default FTP Site and then click Start.
	
	7. When you deploy to the FTP server by using the Package and Deployment Wizard,
	  use the site FTP://servername/alias format, where alias is the alias that you
	  assigned in step 2. Use the username "anonymous" and the password
	  "me@somewhere" for anonymous login.
	
	Problem: Incorrect Parameter:
	
	If you receive an error that states that a parameter is incorrect, you may need
	to take one of the following actions:
	
	- Make sure that you have typed a valid URL to the Web server that you have
	  chosen to use.
	
	- On the Web server, search for files named Default.asp and Default.htm in the
	  \Inetpub\wwwroot directory. Open both files, and make sure that they have the
	  following code at the top of the file:
	
	  <META name="postinfo" content="/scripts/postinfo.asp">
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190046 INFO: VB 6 Readme: Part 6 Wizard Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbWebClasses kbFAQ kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
