---
layout: page
title: "Q197861: ADOCtl.Exe Demonstrates Active Documents, RDS and ADO"
permalink: /kb/197/Q197861/
---

## Q197861: ADOCtl.Exe Demonstrates Active Documents, RDS and ADO

{% raw %}

	Article: Q197861
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbfile kbActiveDocs kbADO kbDatabase kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC2
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.1 SP2, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ADOCtl.Exe is a sample that contains ADOControls, a class library containing
	controls that can be "bound" to an ActiveX Data Objects (ADO) recordset. Using
	these controls, a developer can create forms that can access and update ADO
	recordsets.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ADOCtl.exe
	  (http://download.microsoft.com/download/vfox60/demo/1/WIN98/EN-US/ADOCtl.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	ADOCtl.exe contains the following file attributes:
	
	  FileName                  Size
	  ---------------------------------
	  Readme.txt                 5KB
	  Rdssimple.scx              4KB
	  Rdssimple.sct              9KB
	  Rdssimple.pjx              2KB
	  Rdssimple.pjt              4KB
	  Rdssimple.app             59KB
	  Activedoc.vcx              2KB
	  Activedoc.vct              2KB
	  Adocontrols.vcx            4KB
	  Adocontrols.vct           39KB
	  Adosimple.sct              3KB
	  Adosimple.scx              3KB
	
	Though the controls can be used with plain ADO data, the purpose of the controls
	is to allow data access using Active Documents and Remote Data Services (RDS).
	The following controls are included in the Adocontrols.vcx file:
	
	  ADOCheckBox
	  ADOComboBox
	  ADODataControl
	  ADOEditBox
	  ADOGrid
	  ADOLabel
	  ADOListBox
	  ADOOptionButton
	  ADOOptionGroup
	  ADOSpinner
	  ADOTextBox
	  DataControl (base class for ADODataControl and RDSDataControl)
	  RDSDataControl
	
	The ADO controls need either a Remote Data Service (RDS) Data Control or an ADO
	Data Control for their data source. To connect a RDS Data Control to a server,
	set the following properties:
	
	- Server - Server name, usually in the format of http://MyServer
	
	- Connect - String used to connect to the server, such as "DSN=MyDSN"
	
	- SQL - SQL Select statement.
	
	Once the properties are set, call the BindControls method of the data control to
	bind the ADO controls to the data control. You can now use the controls as if
	they are normal Visual FoxPro controls.
	
	To send updates to the server, call the data control's UpdateRecordset method. To
	cancel changes, call the data control's RefreshRecordset. This has the effect of
	canceling changes since the RefreshRecordset method requeries the server and
	refreshes the controls with data that is unchanged.
	
	The ADO Data Control works in a manner similar to the RDS Data Control. The main
	difference is the properties that must be set:
	
	- ConnectionString - Character string used to connect to the server.
	- SQL - SQL Select statement.
	
	For instance, to connect to a SQL Server, the ConnectionString property might be
	as follows:
	
	  Provider=SQLOLEDB;Data Source=MySQLServer;Initial Catalog=pubs;User
	  ID=John;Password=password
	
	After setting these properties, call the data control's BindControls method to
	populate the ADO controls on the form.
	
	Once a data control is added to the form, you can now add ADO controls to the
	form. The following two custom properties need to be set in order to bind the
	control to a data control:
	
	- DataControl - Name of the data control to bind to.
	- DataControlField - Field of the data control to bind to.
	
	Note that the DataControl and DataControlField properties are similar to the
	control's ControlSource property. In fact, do not change the control's
	ControlSource property, as the data control's BindControls method will change
	the ControlSource based on the DataControl and DataControlField properties.
	
	The Rdssimple.pjx file is a sample Active Document project that demonstrates
	using the ADO controls for Internet data access. To use the application, create
	a system data source name (DSN) on the Internet Information Server that points
	to a SQL Server. Set the database to the Pubs sample database.
	
	Run the Rdssimple.app file either by typing "DO rdssimple.app" in the Command
	window or by selecting Tools from the main menu, then clicking Run Active
	Document and selecting Rdssimple.app. Enter the server name and connect string
	in the appropriate text boxes. The server name will be in the format
	"http://MyServer" (without the quotes). The connect string will be in the format
	"dsn=MyDSN;uid=John;password=password;database=pubs" (without the quotes). For
	the SQL statement, enter "select * from authors", then click the Run button. If
	the server name, connect string and SQL statement are correct, the ADO controls
	will be populated with data.
	
	If no SQL Server is available, it is a trivial task to change the DataControl and
	DataControlField properties as needed to access a different type of data.
	
	The Adosimple.scx file is a sample form demonstrating usage of the
	ADODatacontrol. To use the form, enter a connection string (such as "provider =
	sqloledb;data source=MyServer;initial catalog=pubs;user
	id=John;password=password", without the quotes) and a SQL statement. Click Run
	and the ADO grid populates with data from the server.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182580 HOWTO: Setting Up a Quick Menu for an ActiveDoc App
	
	  Q182579 HOWTO: Getting Started With Active Documents
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation.
	
	
	Additional query words: ADOCtl
	
	======================================================================
	Keywords          : kbfile kbActiveDocs kbADO kbDatabase kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC210SP2 kbMDAC250 kbMDAC260 kbVFP600
	Version           : WINDOWS:2.1 SP2,2.5,2.6,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
