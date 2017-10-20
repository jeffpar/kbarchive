---
layout: page
title: "Q165775: HOWTO: Set up a Visual FoxPro Internet Server"
permalink: /kb/165/Q165775/
---

## Q165775: HOWTO: Set up a Visual FoxPro Internet Server

{% raw %}

	Article: Q165775
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	Below are some considerations that need to be addressed before you create a Web
	page with Visual FoxPro.
	
	On Windows NT 4.0, check to see if there is a subdirectory called \InetPub. This
	folder and its subfolders are necessary if you are setting up the Windows NT
	Server as a Web server. If this folder is not present, run Windows NT CD. This
	folder should be present if you elected to install Internet Server capabilities
	when you installed Windows NT.
	
	1. Setup the Internet Server Manager. You can find it by clicking Start on the
	  Windows NT task bar, selecting Programs, selecting Microsoft Internet Server
	  (Common), and finally selecting Internet Server Manager.
	
	2. The dialog box that appears shows that three Services are running: WWW,
	  Gopher, and FTP. Right-click WWW and click "Service Properties."
	
	3. On the WWW Service Properties dialog box, click the Directories tab and
	  highlight \inetpub\wwwroot. Click Edit Properties. The Directory Properties
	  dialog box appears. Make sure that both the Read and Execute check boxes are
	  selected. Read is checked by default, but Execute may not be checked. You may
	  change the directory here, but it is recommended that you leave
	  \inetpub\wwwroot as the directory when starting out.
	
	  NOTE: Information on changing this directory is located in the Product
	  Documentation HTML file.
	
	4. The \inetpub\wwwroot directory contains the default.htm file. Test the
	  Internet connection to your server by typing //servername/default.htm from
	  Internet Explorer on another machine. If this works then create your FoxPro
	  Internet Server by running the Internet Search Wizard or
	  HOME()+"TOOLS\INETWIZ\WWWPAGE.APP".
	
	  Step 1: Select Tables, and then select customer.dbf from the Visual
	  FoxPro\Samples\Data folder.
	
	  Step 2: Click Search Field and select the Cust_id field.
	
	  Step 3: Select Set Search Page Options and enter a search page title.
	
	  Step 4: With Set Up Search Page add any .gif file.
	
	  Step 5: Click Result Fields, and then select the Cust_id, Company, Address,
	  City, and Country fields.
	
	  Step 6: For the Set Up Result Page, add any .gif file and select "<none>
	  FoxPro Server" for the ODBC data source.
	
	5. After you run the Internet Search Wizard, place everything in
	  \inetpub\wwwroot. The following files created by wwwpage.app should be in the
	  \inetpub\wwwroot directory:
	
	     {Page name}.htm(l)
	     {Page name}.htx
	     {Page name}.idc
	
	  The following files also need to be in this directory:
	
	     Server.app
	     Vfpcgi.exe
	     Querylog.dbf and fpt
	     Vfpis.ini (This file is created when Server.app is run and configured
	     in step 6.)
	
	  The files listed above can be found in the \vfp\tools\inetwiz\server
	  directory.
	
	6. In Visual FoxPro, run the Server.app located in \inetpub\wwwroot. Click
	  Options and specify the following:
	
	     HTTP Server   c:\inetpub\wwwroot\ 
	     Scripts       c:\inetpub\ 
	     Path          c:\vfp\samples\data
	
	  The Path assumes you are querying a table in that directory.
	
	REFERENCES
	==========
	
	For further information on creating an Internet Server with FoxPro look up
	"Internet" in both Help and the online documentation. There is an HTML file
	called Product Documentation which can be accessed by clicking Start on the
	Windows NT task bar, selecting Programs, and then selecting Microsoft Internet
	Server (Common).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
