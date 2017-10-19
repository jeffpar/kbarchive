---
layout: page
title: "Q264691: Creating OLE DB Connection String for Access Database from ASP"
permalink: /kb/264/Q264691/
---

## Q264691: Creating OLE DB Connection String for Access Database from ASP

	Article: Q264691
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbIIS kbiis400 kbiis500
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Access 2000 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a wizard interface for users of Microsoft Data Access
	Components (MDAC) 2.0 and later to create OLE DB connection strings. This
	article describes how to set up and use this Universal Data Link (UDL) Wizard.
	
	MORE INFORMATION
	================
	
	Using the UDL Wizard to Create an OLE DB Connection String
	----------------------------------------------------------
	
	1. Start the UDL Wizard:
	
	  a. Right-click your desktop and select New, and then Text Document.
	
	  b. Rename the new text document as "My.udl" (without the quotation marks).
	     Press ENTER.
	
	  c. You will receive a warning about renaming the file extension. Click yes.
	
	Note that the file's icon now looks like a computer with a datasheet in the
	background.
	
	2. Next, double-click My.udl and use the Wizard as follows:
	
	  a. Click the Provider tab.
	
	  b. From the Providers menu, select Microsoft Jet 4.0 OLE DB Provider, and
	     then click Next to proceed to the Connections tab.
	
	3. On the Connections tab:
	
	  a. Type your database name or browse to the database you want to connect to.
	
	  b. If you have created an account to use for Internet connections to the
	     database, enter those credentials. Otherwise, you can use the default
	     settings (Admin, no password). (To use the default settings, enter "Admin"
	     (without the quotation marks) as the user name, and then select the Blank
	     Password checkbox). If you do not want to use the default credentials,
	     follow the steps under "Additional Information," later in this article, to
	     configure the System database.
	
	  c. Click ok, which will close the Wizard.
	
	4. Next, right-click My.udl file and rename it as "My.txt" (without the
	  quotation marks). Click yes in the warning dialog box that appears.
	
	5. Double-click My.txt, and a statement similar to the following will appear:
	
	  
	
	  [oledb]
	  ; Everything after this line is an OLE DB initstring
	  Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\My.mdb;User ID=;Password=;
	
	The following line is the connection string from My.txt:
	
	  
	
	  Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\My.mdb;User ID=;Password=;
	
	The following sample code illustrates how this connection string can be
	incorporated into an ASP page:
	
	  Set objCXN = Server.CreateObject("ADODB.Connection")
	  strCXN = "Microsoft.Jet.OLEDB.4.0;Data Source=C:\My.mdb;User ID=;Password=;"
	  objCXN.Open strCXN
	     .
	     .
	     .
	  objCXN.Close
	  Set objCXN = Nothing
	
	  NOTE: Do not use ?objCXN.Open("DSN=...)?, because you are no longer using a
	  DSN connection.
	
	Additional Information
	----------------------
	
	If you are specifying an Access database username and password, use the following
	steps to specify the path and the password to access the SYSTEM.mdw file.
	
	In the UDL Wizard:
	
	1. Click the All tab.
	
	2. Select the field labeled Jet OLEDB.System database.
	
	3. Click Edit Value.
	
	4. In the Property Value box, type the path to the SYSTEM.mdw file:
	
	  Windows NT 4: "C:\winnt\system32\System.mdw" (without the quotation marks)
	  Windows 2000: "C:\Program Files\Common Files\System\System.mdw" (without the
	  quotation marks)
	
	5. Click OK in the Edit Property Value window.
	
	6. Select the field labeled Jet OLEDB:Database Password.
	
	7. Click Edit Value.
	
	8. In the Property Value box, type the password for the System database.
	
	9. Click OK in the Edit Property Value window.
	
	10. Click OK to close the Data Link Properties window.
	
	The final Connection String should look like this:
	
	  Provider=Microsoft.Jet.OLEDB.4.0;Password=joe;User ID=jim;Data Source=C:\My.mdb;Persist Security Info=True;Jet OLEDB:System database=C:\Program Files\Common Files\System\SYSTEM.MDW;Jet OLEDB:Database Password=14323
	
	REFERENCES
	==========
	
	Although Microsoft does not recommend that you use Internet Information Server
	(IIS) to connect to Access databases, there are several advantages to using OLE
	DB versus ODBC for Access database connections. One of the benefits of using OLE
	DB connections is the ability to connect to databases without the need to create
	a user or system DSN on the Web server. Other advantages include the ability to
	call a thread-safe version of Visual Basic for Applications, and increased
	stability.
	
	Although written for Access 97, the following Microsoft Knowledge Base article
	provides additional information that is relevant to Access 2000 and IIS:
	
	  Q222135 ACC97: Using Microsoft Jet with IIS
	
	More information about MDAC is available from the Microsoft Universal Data Access
	Web site:
	
	  http://www.microsoft.com/data/
	
	  The Downloads section lists the versions of MDAC that are available. Be sure
	  to read the details prior to installing a new version to make sure that the
	  new version will work correctly with your Web applications and
	  configurations.
	
	For additional information on improving Web server performance, see the following
	Microsoft Web site:
	
	  MSDN Online Web Workshop, Improving ASP Application Performance
	  http://msdn.microsoft.com/workshop/server/asp/server03272000.asp
	
	Additional query words: iis5 OLEDB Access97 Access2k Access2000 2.1 dsnless dsn-less
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbIIS kbiis400 kbiis500 
	Technology        : kbiisSearch kbAccessSearch kbAccess2000 kbAccess97 kbiis500 kbiis400 kbAccess2000Search kbAccess97Search
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
