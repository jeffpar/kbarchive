---
layout: page
title: "Q188135: Description of Windows Script Host (WSH)"
permalink: /kb/188/Q188135/
---

## Q188135: Description of Windows Script Host (WSH)

	Article: Q188135
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbtool win98
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Windows Script Host (WSH) in Windows.
	
	MORE INFORMATION
	================
	
	WSH is a language-independent scripting host for 32-bit Windows platforms.
	Microsoft provides both Microsoft Visual Basic Script and Java Script scripting
	engines with WSH. It serves as a controller of ActiveX scripting engines, just
	as Microsoft Internet Explorer does. Because the scripting host is not a full
	Internet browser, it has a smaller memory footprint than Internet Explorer;
	therefore, WSH is appropriate for performing simple, quick tasks. Scripts can be
	run directly from the desktop by double-clicking a script file, or from a
	command prompt. WSH provides a low-memory scripting host that is ideal for
	non-interactive scripting needs such as logon scripting, administrative
	scripting, and so on. WSH can be run from either the protected-mode
	Windows-based host (Wscript.exe), or the real-mode command shell-based host
	(Cscript.exe).
	
	Installing Windows Script Host
	------------------------------
	
	To install the Windows Script Host, please see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/scripting/default.htm?/scripting/windowshost/download/default.htm
	
	NOTE: Windows Script Host is included in Microsoft Internet Explorer 5.
	
	
	Running Scripts
	---------------
	
	To run scripts from within Windows, you can use one of the following methods:
	
	- Double-click a .vbs or .js file.
	
	- Click Start, click Run, and then type the name of a .vbs or .js file in the
	  Open box.
	
	NOTE: Internet Explorer 4.0 and later treat WSH objects as unsafe ActiveX
	controls. If a Web site tries to initialize or script a WSH object (for example,
	to access files on your local computer), Internet Explorer does not initialize
	or script the object at high or medium security settings and provides the
	following warnings at low security:
	
	Internet Explorer 5:
	
	  Some software (ActiveX controls) on this page might be unsafe. It is
	  recommended that you not run it. Do you want to allow it to run?
	
	Internet Explorer 4.0, 4.01, 4.01 Service Pack 1:
	
	  An ActiveX object on this page may be unsafe. Do you want to allow it to
	  initialize and be accessed by scripts?
	
	To enable Internet Explorer 4.0 or later to initialize and script WSH objects
	from a Web page without warnings (not recommended), select a custom setting for
	the security zone where the Web page resides, and enable the Initialize and
	script ActiveX controls not marked as safe option.
	
	Note that Web sites can also create links to .vbs or .js files on a Web page.
	When you click such a link in Internet Explorer, a File Download dialog box
	appears prompting you (by default) to either open the file from its current
	location or save the file to disk. If you click Open, the file is downloaded and
	run from your local file system bypassing Internet Explorer's security
	settings.
	
	IMPORTANT: If you click Open in the File Download dialog box and click the Always
	ask before opening this type of file check box to clear it, Internet Explorer no
	longer prompts you with a File Download dialog box. To cause Internet Explorer
	to prompt you with a File Download dialog box again, follow these steps:
	
	1. In My Computer, click Folder Options on the View menu.
	
	2. On the File Types tab, select the appropriate registered file type (.vbs or
	  .js).
	
	3. Click Edit, and then click the Confirm open after download check box to
	  select it.
	
	4. Click OK, and then click OK again.
	
	Several "HTML viruses" have been reported to use WSH objects. For example,
	HTML.Internal (or HTML.Prepend), HTML.Offline, and HTML.Redirect.Companion.
	Anti-virus software should not be necessary to protect you from such viruses
	provided you follow safe computing practices (including not installing software
	or scripts from unknown and untrusted sources). Viruses that use WSH objects do
	not expose or exploit any security issue regarding the Windows or Internet
	Explorer suite of products. Anytime you install software or run scripts from
	unknown or untrusted sources, you risk compromising your computer.
	
	
	Minimum Requirements for WSH
	----------------------------
	
	The minimum requirement for WSH to function is Internet Explorer version 3.0 or
	later. WSH relies on the Visual Basic Script and Java Script engines provided in
	Internet Explorer.
	
	Troubleshooting WSH
	-------------------
	
	Several sample scripts are installed in the Windows\Samples\WSH folder. If these
	scripts run correctly, but others do not, contact the author of the script for
	support. Support and additional information is also available on the following
	Microsoft Web site:
	
	  http://msdn.microsoft.com/scripting/windowshost/default.htm
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool win98 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbWin98 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5
	Issue type        : kbinfo
	
	=============================================================================
	
