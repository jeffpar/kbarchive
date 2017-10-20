---
layout: page
title: "Q163299: WD97: Web Page Authoring Tools AutoUpdate"
permalink: /kb/163/Q163299/
---

## Q163299: WD97: Web Page Authoring Tools AutoUpdate

{% raw %}

	Article: Q163299
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta word97 kbwdinternet kbofficeupdatekbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Microsoft periodically provides updated versions of the Web Page Authoring Tools
	to keep up with changing technology. Word can automatically update these tools,
	or you can manually set Word to check for and download the latest version of the
	tools.
	
	NOTE: After Word checks to see whether you need to update your files, it sets a
	date in the AutoUpdate registry setting that it uses to perform the next
	AutoUpdate. The date is reset to one month after the current AutoUpdate.
	
	
	MORE INFORMATION
	================
	
	Updating Automatically
	----------------------
	
	If you have access to the World Wide Web, Word periodically checks to see whether
	a newer version of the Web Page Authoring Tools is available on the Microsoft
	Web site. If a newer version is found, a message appears, notifying you that a
	newer version is available. You can choose to download and install the latest
	version.
	
	Updating Manually
	-----------------
	
	Using the AutoUpdate Command:
	
	If you have a dial-up connection to the World Wide Web, use the AutoUpdate
	command on the Tools menu to manually check for the latest version:
	
	1. In Word, open a Web page document.
	
	2. On the Tools menu, click AutoUpdate.
	
	3. If Word prompts you to download the latest versions, click Yes.
	
	Using Your Internet Browser:
	
	If you have a dial-up connection to the World Wide Web, use your Internet browser
	to connect to the AutoUpdate Web Page to manually check for the latest version:
	
	1. From your Internet browser, connect to the following Web address:
	
	  http://office.microsoft.com/downloads/9798/wd97au2.aspx
	
	2. Click Download Now.
	
	3. Follow the directions for downloading the Wd97au.exe file.
	
	Turning Off AutoUpdate
	----------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Quit all programs.
	
	2. Click the Windows Start button, and then click Run.
	
	3. In the Open dialog box, type "regedit" (without the quotation marks) and then
	  click OK.
	
	4. Go to the following registry key:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\Word\HTML
	
	  The status bar displays the following:
	
	  My Computer\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\Word\HTML
	
	5. Click the HTML key to select it.
	
	6. On the Registry menu, click Export Registry File, type a file name, and then
	  click Save.
	
	7. Do one or both of the following:
	
	Turn Off the Automatic AutoUpdate:
	
	  a. In the HTML key, double-click the AutoUpdate entry.
	
	  b. In the Edit String dialog box, change the Value date to -1, and then click
	     OK.
	
	Turn Off the Manual AutoUpdate:
	
	  a. In the HTML key, double-click the AutoUpdateAddress entry.
	
	  b. In the Edit String dialog box, type the following and then click OK: "
	     http://www.microsoft.com/isapi/msoffice/word/noupdate.idc " (without the
	     quotation marks)
	
	8. On the Registry menu, click Exit.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172502 WD97: Troubleshooting Setup for the Web AutoUpdate Feature
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdta word97 kbwdinternet kbofficeupdate kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
