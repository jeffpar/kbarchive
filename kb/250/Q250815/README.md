---
layout: page
title: "Q250815: Word Not Listed as HTML Editor in Internet Explorer 5.0, 5.01"
permalink: /kb/250/Q250815/
---

## Q250815: Word Not Listed as HTML Editor in Internet Explorer 5.0, 5.01

	Article: Q250815
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:5,5.01; :2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Internet Explorer version 5.01 for Windows 98 
	- Microsoft Internet Explorer versions 5, 5.01 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Office 2000 Standard, version 2000, or Microsoft
	Office 2000 Professional on a computer running Windows 2000, Microsoft Word is
	not listed as a Hypertext Markup Language (HTML) editor in Internet Explorer 5.0
	or 5.01.
	
	CAUSE
	=====
	
	This issue occurs because Word is not writing to the registry key
	HKEY_LOCAL_MACHINE\Software\Classes\.htm\OpenWithList.
	
	WORKAROUND
	==========
	
	To work around this issue, save a foreign HTML file to your desktop (for
	example, http://www.microsoft.com), and then open the file in Word. In the
	Office Assistant dialog box, click Yes to make Word your default HTML editor.
	
	STATUS
	======
	
	This problem was corrected in Internet Explorer 5.5.
	
	MORE INFORMATION
	================
	
	To verify the success of this procedure, follow these steps:
	
	1. Click the Start button on the taskbar, point to Settings, point to Control
	  Panel, and then double-click Internet Options.
	
	2. In the Internet Options dialog box, click the Programs tab.
	
	3. Under Internet programs, in the HTML Editor box, verify that Word is listed
	  as the HTML editor. If it is not, select Word as your HTML editor, and then
	  click OK.
	
	4. Start Internet Explorer, and on the toolbar, click Edit to verify that Word
	  starts.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE500Search kbWinAdvServSearch kbZNotKeyword3 kbIE98Search kbIE501Win98 kbIE500WinNT400 kbIE501WinNT400
	Version           : WINDOWS:5,5.01; :2000
	Issue type        : kbprb
	
	=============================================================================
	
