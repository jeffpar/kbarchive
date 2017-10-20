---
layout: page
title: "Q172502: WD97: How to Troubleshoot Setup for the Web AutoUpdate Feature"
permalink: /kb/172/Q172502/
---

## Q172502: WD97: How to Troubleshoot Setup for the Web AutoUpdate Feature

{% raw %}

	Article: Q172502
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv winword word97 kbwdinternetkbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses the following topics:
	
	- Reasons for messages you may receive during the Web AutoUpdate process.
	
	- Troubleshooting measures to help you resolve issues that may occur with the
	  Web AutoUpdate.
	
	- How to remove the Web AutoUpdate.
	
	MESSAGES YOU MAY RECEIVE DURING THE WEB AUTOUPDATE PROCESS
	
	Could Not Update the Web Authoring Tools:
	
	Symptoms:
	
	You receive the following message:
	
	  Could not update the Web Authoring Tools. Return to the Office Free Stuff web
	  site for troubleshooting tips. Or if you run Word directly from a network,
	  ask your system administrator for assistance.
	
	After the standard error message, the name of the component that caused the
	update to fail is given in square brackets, for example "[STYLES]." For more
	detailed information about these components, see the "More Information" section
	later in this article.
	
	Cause:
	
	This error message may occur when any of the following conditions are true:
	
	- You do not have Microsoft Word 97, or a later version installed. This is
	  necessary for updating the Web Authoring Tools.
	
	  -or-
	
	- Word 97 has been set up to run from CD-ROM. Web AutoUpdate requires that Word
	  is run from the hard disk, because the update replaces some existing files.
	
	  -or-
	
	- The optional Web Page Authoring features were not installed when you
	  installed Word, or certain Web Page Authoring components or directories have
	  been removed.
	
	  -or-
	
	- The HTML Converter is not installed.
	
	Workaround:
	
	To install the Web Page Authoring (HTML) features, follow these steps:
	
	1. Run Word Setup and choose to Add/Remove components.
	
	2. In the Maintenance dialog box, click to select the Web Page Authoring (HTML)
	  check box in the Options list.
	
	3. Click Continue.
	
	To install the HTML converter, follow these steps:
	
	1. Run Word Setup and choose to Add/Remove components.
	
	2. In the Maintenance dialog box, click to select Converters and Filters in the
	  Options list, and then click Change Option.
	
	3. In the Option list, click to select Text Converters, and then click Change
	  Option.
	
	4. In the Options list, click to select HTML Converter.
	
	5. Click OK twice, and then click Continue.
	
	More Information:
	
	If you are familiar with working with registry settings, you may want to verify
	that the settings appear as they are listed in the following table. This table
	includes the components that Word looks for in the registry. The components are
	checked in the following order. Word must be able to create and write to the
	listed directories.
	
	NOTE: The paths for the default directories may vary depending on where you set
	up Microsoft Office.
	
	  Component     Registry Location/Default Directory
	  ------------------------------------------------------------------------
	
	  [STYLES]      Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Word\HTML\LocalPageStyles
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Office\Web Page
	                Templates\Styles
	
	  ------------------------------------------------------------------------
	
	  [MSOFFICE]    Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Word\Options\PROGRAMDIR
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Office
	
	  ------------------------------------------------------------------------
	
	  [CONTENT]     Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Word\HTML\LocalContent
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Office\Web Page
	                Templates\Content
	
	  ------------------------------------------------------------------------
	
	  [WEBART]      Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Word\HTML\WebArt-Path
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Clipart
	
	  ------------------------------------------------------------------------
	
	  [BULLETS]     Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Word\HTML\Bullet-Path
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Clipart\Bullets
	
	  ------------------------------------------------------------------------
	
	  [LINES]       Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Word\HTML\HorizontalLine-Path
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Clipart\Lines
	
	  ------------------------------------------------------------------------
	
	  [TEMPLATES]   Registry Location:
	
	                HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\ 
	                Common\FileNew\LocalTemplates
	
	                Default Directory:
	
	                C:\Program Files\Microsoft Office\Templates
	
	  ------------------------------------------------------------------------
	
	  [TEXTCONV]    Registry Location:
	
	                HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools
	                Location\TEXTCONV
	
	                Default Directory:
	
	                C:\Program Files\Common Files\Microsoft Shared\Textconv
	
	The following components are checked in the following order. Word must be able to
	create and write to these directories.
	
	  Component   Default Directory
	  -----------------------------------------------------------
	
	  [HTML]       C:\Program Files\Microsoft Office\Office\Html
	  [DIALOGS]    C:\Program Files\Microsoft Office\Office\Html\Dialogs
	  [BACKGROUND] C:\Program Files\Microsoft Office\ClipArt\Backgrounds
	  [MACROS]     C:\Program Files\Microsoft Office\Office\Macros
	  [WEBPAGES]   C:\Program Files\Microsoft Office\Templates\Web Pages
	  [AU_SETUP]   C:\Program Files\Microsoft Office\Office\Html\AU_Setup
	  [AUREMOVE]   C:\Program Files\Microsoft Office\Office\Html\AURemove
	
	Because the [STYLES] key is checked first, the installation program typically
	gives this error message when failing. This problem may occur if Microsoft
	Office 97 is not correctly installed, if the "Web Page Authoring" component is
	missing, or if you have a read-only installation.
	
	Under some circumstances, Setup will successfully extract the files from the
	package, and then stop without giving any error message. This normally indicates
	an unusual partial installation, or a problem determining the shared tools
	directory.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Some Useful Tips:
	
	You must restart after Setup. Delaying the restart is not harmful, but the new
	features won't be available until you restart. The "What's New" document
	reiterates this.
	
	You can tell whether the new tools were installed with a few easy tests:
	
	- When editing an HTML document, if the File menu includes "Publish to Web"
	  above "Web Page Preview," the new Html.dot file is installed.
	
	- Insert a table and choose Table Properties on the Table menu. If there is a
	  check box labeled "Center table horizontally" under the three picture
	  buttons, the new WLL is installed.
	
	- Create a Word document and type "Hello," press ENTER twice, and then type
	  "world." Save the document in HTML format. If the empty paragraph is removed
	  when the document is saved as HTML (it will look the same because of HTML
	  built-in space before and after each paragraph), the new converter is
	  installed.
	
	AutoUpdate Could Not Download a Newer Version:
	
	Symptoms:
	
	You receive the following message:
	
	  AutoUpdate could not download a newer version. Word could not connect to the
	  Internet, or the Internet connection returned an error. To retry the update,
	  click AutoUpdate on the Tools menu.
	
	Cause:
	
	This error message may occur when any of the following conditions are true:
	
	- Word cannot connect to an existing Internet connection.
	
	  -or-
	
	- The Internet connection returns an error.
	
	  -or-
	
	- Word could not find Web Page Authoring Tools on the Microsoft Web site.
	
	Workaround:
	
	Visit the following Microsoft Web address to download and install the update:
	
	  http://office.microsoft.com/downloads/9798/wd97au.aspx
	
	You Already Have the Latest Version of the Web Page Authoring Tools:
	
	Symptoms:
	
	You receive the following message:
	
	  You Already Have the Latest Version of the Web Page Authoring Tools
	
	Cause:
	
	You may receive this message if you already have the latest version of the Web
	Page Authoring Tools installed on your computer. A later version of the tools is
	not currently available.
	
	Workaround:
	
	You may want to try the update again in a month.
	
	AutoUpdate Could Not Check for a Later Version:
	
	Symptoms:
	
	You receive the following error message
	
	  AutoUpdate could not check for a newer version
	
	followed by an explanation, and the following message:
	
	  Choose AutoUpdate from the Tools menu to attempt the download again.
	
	Cause:
	
	This error message may occur when any of the following conditions are true:
	
	- The Internet connection timed out.
	
	  -or-
	
	- The Internet connection could not be established.
	
	  -or-
	
	- The Internet connection returned an error.
	
	Workaround:
	
	To work around this problem, wait and try the connection again later.
	
	Word Can Automatically Check the Internet...:
	
	Symptoms:
	
	You receive the following message:
	
	  Word can automatically check the Internet for new versions of the Word
	  Internet Tools. Dial up and check for a newer version now?
	
	Cause:
	
	Web Page Authoring Tools has a registry key called AutoUpdate. If the current
	date is greater than or equal to the date in the AutoUpdate key, you are
	prompted to have Word check the Microsoft World Wide Web site for a later
	version of the Authoring Tools. Click Yes to allow Word to check for an update.
	
	Would You Like to Access the Internet...:
	
	Symptoms:
	
	You receive the following message:
	
	  Would you like to access the Internet to check for a new version of Web page
	  authoring tools?
	
	If you want to perform the update check, click Yes.
	
	Cause:
	
	This message is displayed after you click AutoUpdate on the Tools menu.
	
	Workaround:
	
	If you click to select the "Don't ask me again" check box, Word will not present
	this dialog box again.
	
	
	A New Version of the Web Page Authoring Tools Is Available:
	
	Symptoms:
	
	You receive the following message:
	
	  A new version of the Web page authoring tools is available. Do you wish to
	  update Word now?
	
	Cause:
	
	When you perform the AutoUpdate, if there is a later version of the Web Page
	Authoring Tools available, Word prompts you with this message.
	
	Click Yes to continue the upgrade. If you click No, or click the "Don't Ask Me
	Again and Disable Word AutoUpdate" check box, Word will no longer automatically
	check for new versions. However, if you do a manual check for an update, Word
	begins to check for updates again automatically.
	
	WEB AUTOUPDATE TROUBLESHOOTING MEASURES
	
	Symptoms:
	
	AutoUpdate does not appear on the Tools menu.
	
	Cause:
	
	This problem may occur when any of the following conditions are true:
	
	- You do not have an HTML document open, or the HTML document is not the active
	  document in Word.
	
	  -or-
	
	- Your current version of Word is earlier than Word 97.
	
	  -or-
	
	- The optional Web Page Authoring features were not installed when you in
	  stalled Word. To install the optional Web Page Authoring (HTML) features:
	
	  1. Run Word Setup and choose to Add/Remove components.
	
	  2. In the Maintenance dialog box, click to select the Web Page Authoring
	     (HTML) check box in the Options list.
	
	  3. Click Continue.
	
	HOW TO REMOVE THE WEB AUTOUPDATE
	
	To revert back to the Web features you had prior to the update, follow these
	steps:
	
	1. Quit Word if it is running.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click the Add/Remove Programs icon.
	
	4. In the program list, select Word 97 Web Authoring Tools Update and click
	  Add/Remove.
	
	
	MORE INFORMATION
	================
	
	For more information about the Web Page Authoring Tools, click "Contents and
	Index" on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  web pages, authoring tools
	
	and then double-click the selected text to go to the "Learn about installing and
	using Web page authoring tools" topic. If you are unable to find the information
	you need, ask the Office Assistant.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	  Q173146 WD97: Run from Network Installation for Web Authoring AutoUpdate
	
	Additional query words: 8.0 8.00 kbofficeupdate troubleshooting tshoot troubleshooter
	
	======================================================================
	Keywords          : kbenv winword word97 kbwdinternet kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
