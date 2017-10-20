---
layout: page
title: "Q189539: INFO: VB 6.0 Readme Part 8: WebClass Designer Issues"
permalink: /kb/189/Q189539/
---

## Q189539: INFO: VB 6.0 Readme Part 8: WebClass Designer Issues

{% raw %}

	Article: Q189539
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbreadme kbhtml kbwizard kbAppSetup kbDCOM kbInternet kbVBp kbVBp600 kbVS600 kbWebClass
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
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
	
	Part 1.  Important Issues - Please Read First!
	Part 2.  Data Access Issues and DataBinding Tips
	Part 3.  Control Issues
	Part 4.  Language Issues
	Part 5.  Samples Issues
	Part 6.  Wizard Issues
	Part 7.  Error Message Issues
	Part 8.  WebClass Designer Issues
	Part 9.  DHTML Page Designer Issues
	Part 10. Extensibility issues
	Part 11. Miscellaneous Issues
	Part 12. Microsoft Transaction Server (MTS) Issues
	Part 13. Dictionary Object
	Part 14. Visual Component Manager
	Part 15. Application Performance Manager
	
	MORE INFORMATION
	================
	
	Webclass Designer Issues:
	
	Webclasses: "Me." Not Supported
	-------------------------------
	
	You cannot use the "Me" reference in your Webclass code to reference the Webclass
	object. For example, the documentation frequently shows that you can write code
	such as "Me.URLData = value". This is not supported. Instead of using Me, you
	must use the "Webclass" statement. For example, instead of Me.URLData, you would
	use Webclass.URLData.
	
	Webclasses: Invalid HTML Syntax Can Cause Unspecified Error
	-----------------------------------------------------------
	
	If one of the templates you add to your Webclass contains badly formed HTML, you
	can sometimes receive an error message on loading the template. The message
	states only that an unspecified error has occurred. For example, in older pages
	there may be two BODY tags, one that specifies a background GIF and one that
	specifies a color. You can also have errors in unmatched opening and closing
	tags, invalid nesting, or other syntax issues. If you receive this message on
	loading a template, check your HTML carefully or run the file through an HTML
	syntax checker, then reload the template.
	
	Webclasses: Avoid Using Global or Static Variables in a Webclass
	----------------------------------------------------------------
	
	One allocation of global variables occurs per thread in a multi-threaded
	environment. For more information, search Online, with Search titles only
	selected, for "Scalability and Multithreading" in the MSDN Library Visual Studio
	6.0 documentation.
	
	Webclasses: Some External HTML Changes Are Not Detected Automatically
	---------------------------------------------------------------------
	
	When working on an HTML template in the Webclass designer, any changes made to
	the HTML file outside of Visual Basic (for example, in an external HTML editor)
	are usually detected by Visual Basic when you return to the designer. In these
	cases, you are prompted to reload the changed file. In some cases, external
	changes are not detected. The most common occurrence of this problem is when you
	set focus to a Visual Basic window other than the Webclass designer before
	switching to an external editor. Upon return to Visual Basic, the refresh prompt
	does not appear. This could result in the external changes being overwritten
	when you save the project, unless you refresh the file on your own.
	
	NOTE: You may also see this situation if you edit the template while your project
	is running.
	
	In cases where you make changes to the HTML and are not prompted to refresh, you
	can refresh manually by selecting Refresh HTML Template from the template's
	shortcut menu.
	
	NOTE: When you navigate to your external HTML editor, it is best to use the Edit
	HTML toolbar button or shortcut menu command. If you use the taskbar or the
	ALT+TAB key combination to navigate to an editor, make sure to save your project
	before leaving Visual Basic or you could lose changes you made in the designer.
	
	Webclasses:
	
	IIS Administration Console File Settings Not Acknowledged for Templates
	-----------------------------------------------------------------------
	
	The IIS Administration Console allows the server administrator to specify
	properties for files that are available on the IIS server. These properties
	include HTTP headers, file security, and custom errors. These properties will
	not be set on a Webclass template file if that file is sent to the client by the
	Webclass run-time.
	
	Webclasses: Unattended Execution
	--------------------------------
	
	A project containing a Webclass must have the Unattended Execution option
	selected in the Project Properties dialog box. This property has the following
	benefits:
	
	- Setting this property allows the Webclass to be run as an apartment model
	  object. This allows the Webclass to service an HTTP request on the thread on
	  which the request was received instead of processing all requests on a single
	  thread.
	
	  NOTE: You must set the Threading Model property in the Project Properties
	  dialog box to Apartment Threaded to run as an apartment-model object.
	
	- Setting this property causes the Visual Basic run-time DLL to log all
	  run-time errors to the event log instead of displaying the error in a prompt.
	  Displaying the message in a prompt would hang the IIS thread.
	
	- Setting this property causes any call to the Visual Basic MsgBox function to
	  log its message to the event log instead of displaying a prompt. Displaying
	  the message in a prompt would hang the IIS thread.
	
	Webclasses: Retain in Memory
	----------------------------
	
	A Visual Basic project executes inside the framework of the Visual Basic run-time
	environment. When a Visual Basic project begins executing, this framework needs
	to be initialized. The initialization takes the form of internal state
	allocation and initialization. In a multi-threaded Visual Basic environment,
	initialization has to be done at the process level and for each thread that is
	used to create a Visual Basic object.
	
	The above initialization is for the Visual Basic run-time. Similarly, for each
	Visual Basic project whose objects are created, the Visual Basic project must be
	initialized both at the process and the thread level.
	
	When a Visual Basic project is no longer in use on a thread or process (all the
	objects created in the thread or process are destroyed), the above state is
	reset and the memory is reallocated. Consequently, if a thread or process
	repeatedly creates and then quickly deletes all its Visual Basic objects, the
	overhead from the allocation and reallocation of run-time and project state is
	considerable. This will have a negative impact on Visual Basic's performance.
	
	This scenario occurs in IIS especially when an ASP creates a Visual Basic object,
	invokes some operations on it and then releases it. This is precisely the case
	for Webclasses where the Webclass' StateManagement is set to wcNoState. As a
	result, the most commonly used Webclass scenario will have poor performance.
	
	The project property RetainInMemory allows the Visual Basic developer to override
	this behavior. When this property is set, once the Visual Basic project is
	initialized inside a process or thread, its state will never be reset or freed.
	Further, because the presence of a loaded Visual Basic project prevents the
	unloading of the Visual Basic run-time, the Visual Basic run-time will never be
	reset in the thread or process. In the case of IIS, once a Webclass whose
	RetainInMemory property is set is loaded into an IIS thread, it will never be
	reset in that thread. This will improve the performance of the Webclass.
	
	Note that RetainInMemory refers to the retention of the state of the Visual Basic
	run-time and the Visual Basic project. It does not refer to the retention of the
	Visual Basic project's object instances.
	
	In standard Visual Basic projects, projects are unloaded from threads or
	processes as soon as they are no longer being used. In a Webclass project, this
	model can cause performance issues because the server must create an object,
	invoke a method on it, and destroy it. You can optimize your Webclasses by
	setting a project property called Retain In Memory. The Retain In Memory
	property prevents the project from being unloaded until the thread or process in
	which it is running terminates.
	
	Webclasses:
	
	Accounting for Differences Between the Debug and Compiled Versions
	------------------------------------------------------------------
	
	Visual Basic provides the ability to debug components running under a Windows NT
	service. One of the most common uses of this feature is to debug an IIS
	Application. Visual Basic achieves this by running the component in the Visual
	Basic IDE. When the component runs, IIS creates a proxy object supplied by
	Visual Basic, which in turn creates the real object running in the Visual Basic
	IDE. IIS then communicates with the object through DCOM. This debugging behavior
	is very different from how the project runs as a compiled DLL. Certain behavior
	that is present in debug mode works differently when you run the compiled
	version of the project. Because of this, you must keep the compiled behavior of
	the project in mind when you build your Webclass.
	
	The following are key areas in which you must tailor your application to the
	behavior the Webclass displays as a compiled application:
	
	- Use only system DSNs because other DSNs will not work beyond debug mode.
	
	- Do not use an Access database on a remote computer in your project. While
	  this will work in debug mode, you will not be able to use the database in the
	  compiled application.
	
	- Do not allow the Webclass to add itself or other Visual Basic components to
	  the Active Server Page's Application object. Attempting to do so will
	  generate an error when you run the compiled application.
	
	- Understand the security context of the compiled application. Please refer to
	  the "Webclasses: Articles of Interest" section below for information on an
	  article about security.
	
	- Keep in mind that your compiled Webclass will be accessed from multiple
	  threads rather than through the same thread, as is the case in debug mode.
	  Static and global variables will not be kept across threads. For more
	  information, search Online, with Search titles only selected, for
	  "Scalability and Multithreading" in the MSDN Library Visual Studio 6.0
	  documentation.
	
	- Understand that, although you will see message prompts in debug mode, the
	  compiled Webclass writes all errors as entries in the NT event log or in a
	  log file created in the Windows directory. No prompt appears for errors in
	  compiled mode.
	
	- While Unattended Execution must be set for Webclasses, you will not see the
	  side effects of failing to set this property in debug mode. See the
	  Unattended Execution section above for details.
	
	Webclasses: Performance Tips
	----------------------------
	
	The following are miscellaneous tips you can incorporate to improve the
	performance of your IIS applications:
	
	- When running from the IDE, the interactive user's context is used. When
	  running compiled, the IIS anonymous user is used unless some other security
	  setting is set up on the server.
	
	- Make sure that the Unattended Execution and Retain In Memory options are
	  selected in the Project Properties dialog box for your application.
	
	- If your application does not include any text replacements, set the TagPrefix
	  property to an empty string. This prevents the Webclass from performing
	  unnecessary scans.
	
	- Do not store Visual Basic objects (or any other apartment-model COM object)
	  in the Active Server Pages' Session object. This may affect scalability. You
	  can store strings in the Session object without adverse effects. Refer to the
	  IIS documentation for more details.
	
	- Limit the use of variants in your application.
	
	- When the Webclass's StateManagement property is set to wcRetainInstance,
	  performance will decrease when the number of clients significantly increases.
	
	- If your application is performing a client-side transaction to a Webclass
	  template that does not contain any replacements or does not use the URLData
	  property, you should access the template directly through a URL.
	
	- When using the URLFor method, specify the Webitem by the string name rather
	  than by an object reference.
	
	- Use specific types when creating and invoking other components.
	
	Webclasses: Miscellaneous Issues
	--------------------------------
	
	- When the debugger for your IIS application hits a breakpoint in any event,
	  pressing the F5 key to continue does not return the focus to Internet
	  Explorer. You must switch to Internet Explorer manually after continuing.
	
	- Webclass names and tag names are case-insensitive. You cannot rename a
	  Webclass to the same name it had previously, changing only the case. For
	  example, if you change a Webclass named Orderentry to OrderEntry, the
	  original name remains unchanged.
	
	- Avoid running multiple browser instances during debugging. If more than one
	  instance of Internet Explorer is open, Visual Basic does not keep track of
	  which browser is running the Webclass project. If you have two browsers open,
	  one pointing to your project and one pointing to another page, both browsers
	  will be affected when you end your debugging session.
	
	- You may receive an error if you attempt to compile your IIS application
	  mproject from the command line. One way to work around this is to open the
	  project in Visual Basic, dirty the designer in some insignificant way, and
	  then resave the project. You can then restart the compile from the command
	  line and it should work correctly.
	
	- If you want to program buttons on the HTML templates in your Webclass, you
	  must be aware of two items. First, your buttons must be of type SUBMIT. You
	  can set this by adding a parameter to the HTML for your button element that
	  says type=SUBMIT. Second, you cannot code for the buttons directly; instead
	  you must connect their form element. You can either place each button in a
	  separate form or you can use the Request object's form collection to
	  determine the button from which the event originated.
	
	Webclasses: Articles of Interest
	--------------------------------
	
	Webclasses tie together several distinct technologies, including Visual Basic,
	Active Server Pages, Internet Information Server, and Windows NT. There are
	several articles available on Microsoft's Web site that may be useful to you as
	you learn about the technologies behind WebClasses. Some of the articles that
	may be particularly helpful are listed below:
	
	- MSDN Online main site: http://www.msdn.microsoft.com/workshop/default.asp
	
	- "Implementing a Secure Site with ASP"
	  http://www.microsoft.com/isn/techcenter/security.asp
	
	- "INFO: Security Issues with Objects in ASP and ISAPI Extensions" Microsoft
	  Knowledge Base article Q172925
	
	- "FAQ: COM Security Frequently Asked Questions" Microsoft Knowledge Base
	  article Q158508
	
	- "INFO: Descriptions of Workings of OLE Threading Models" Microsoft Knowledge
	  Base article Q150777
	
	
	- "INFO: COM Servers Activation and NT Windows Stations" Microsoft Knowledge
	  Base article Q169321
	
	- "HOWTO: Launching ActiveX Servers from ISAPI Extensions" Microsoft Knowledge
	  Base article Q156223
	
	- "INFO: Security Ramifications for IIS Applications" Microsoft Knowledge Base
	  article Q158229
	
	Webclasses: Formatting in Source HTM File
	-----------------------------------------
	
	You may see a loss of some formatting in your HTML source code after you add a
	template file to the Webclass designer. For example, the Webclass may remove
	some extraneous white spaces from your original file. This will not affect the
	functioning of your HTML page in any way.
	
	Webclasses: Cannot Support HTML's LINK Element
	----------------------------------------------
	
	LINK tags are used in an HTML page to reference style sheets. While your HTML
	pages in a Webclass project can contain this tag, you cannot use the designer to
	access the LINK element and process Visual Basic code for it. If you need to
	manipulate a LINK tag in your code, you can manually add event notation to the
	tag as shown in the Online documentation. To see the notation, search Online,
	with Search titles only selected, for "Manually Adding Event Notation to an .HTM
	File" in the MSDN Library Visual Studio 6.0 documentation.
	
	Webclasses: When Using Visual SourceSafe with Webclass Projects,
	
	You Must Manually Check in the Project's .HTM Files
	---------------------------------------------------
	
	When you check an IIS application project into Visual SourceSafe, the HTML pages
	associated with the project are not automatically checked into the SourceSafe
	tree with the rest of the project files. You must manually add them to the tree
	as related files.
	
	Webclasses: TagPrefix Should Be WC
	----------------------------------
	
	Although the default value for the TagPrefix property for your Webclass templates
	is WC@, it is preferable for you to use WC: whenever possible to indicate text
	replacements in your template files.
	
	Webclasses: Variant Parameter in URLFor Method
	----------------------------------------------
	
	The WebItem parameter of the URLFor method can accept a WebItem object or the
	name of a WebItem as a string. For performance reasons, you should use the
	string form when referencing multiple webitems within one request.
	
	Webclasses: Sequencing Data is Passed Using the &WCU Parameter
	--------------------------------------------------------------
	
	In "Handling Sequencing in Webclasses" section of the Building Internet
	Applications book in MSDN's Component Tools Guide, the documentation incorrectly
	states that you can move data between the client and the server using a ?Data
	parameter appended on to your URL request. In fact, you must use a &WCU
	parameter instead of ?Data. The correct syntax for the request is:
	
	  WCI=webitem1?WCE=event1&WCU=01
	
	Webclasses:
	
	StateManagement Property Constants Contain Incorrect Property Reference
	-----------------------------------------------------------------------
	
	The "StateManagement Property Constants" topic incorrectly states that the
	RetainInstance constant causes the Webclass to retain state data until the
	Webclass object calls the SetComplete method. This should say that data is
	maintained until the Webclass object calls the ReleaseInstance method. To see
	the erroneous Help topic, search Online, with Search titles only selected, for
	"StateManagement Property Constants" in the MSDN Library Visual Studio 6.0
	documentation.
	
	Webclasses: State and the Session Object
	----------------------------------------
	
	If the Webclass's StateManagementType is wcRetainInstance, a separate instance of
	the Webclass will be maintained in the ASP Session object per user session. In
	some cases, it may appear to you that state is not being maintained when you
	actually have two instances of a Webclass in your Session object. One situation
	in which this might occur is when you have two virtual directories that both
	point to the same location. If you create one virtual directory when you begin
	your debugging session and reference the second in your code, you will actually
	start a second instance of the Webclass when the code is activated. Please refer
	to the Active Server Pages documentation in MSDN for details on how the Active
	Server Pages Session object is implemented.
	
	Webclasses:
	
	Code Corrections in Help Topic "Defining Webclass Events at Run Time"
	---------------------------------------------------------------------
	
	In the topic "Defining Webclass Events at Run Time," the sample code shows a
	statement that reads:
	
	     rs = New ADO.Recordset
	
	The correct syntax for this line should be:
	
	     Set rs = New ADODB.Recordset
	
	Webclasses: HTM and ASP Files Not Included in Standard Packages
	---------------------------------------------------------------
	
	When you package an IIS application into a standard package using the Package and
	Deployment Wizard, the wizard does not automatically include the .htm and .asp
	files for the project in the .cab file it creates. You must include these files
	manually while you are packaging the application.
	
	Webclasses: Unspecified Error
	-----------------------------
	
	An "unspecified error" occurs if you add an existing Webclass to a new project
	and then click on the template icon before the project has been saved. If you
	receive a prompt saying that "An unspecified error has occurred" in this
	context, save your project.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170164 INFO: VB 6.0 Readme Part 1: Important Issues - Read First!
	
	  Q170163 INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	  Q170162 INFO: VB 6.0 Readme Part 3: Control Issues
	
	  Q170161 INFO: VB 6.0 Readme Part 4: Language Issues
	
	  Q170160 INFO: VB 6.0 Readme Part 5: Samples Issues
	
	  Q190046 INFO: VB 6.0 Readme Part 6: Wizard Issues
	
	  Q170158 INFO: VB 6.0 Readme Part 7: Error Message Issues
	
	  Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	  Q170154 INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	  Q170157 INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	  Q170156 INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	  Q191792 INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	  Q191791 INFO: VB 6.0 Readme Part 14: Visual Component Manager
	
	  Q191790 INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbreadme kbhtml kbwizard kbAppSetup kbDCOM kbInternet kbVBp kbVBp600 kbVS600 kbWebClasses MSGRAPH kbIIS 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
