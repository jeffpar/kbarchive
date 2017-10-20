---
layout: page
title: "Q179892: XWEB: OWA Client Does Not Correctly Associate .Rtf Freedoc"
permalink: /kb/179/Q179892/
---

## Q179892: XWEB: OWA Client Does Not Correctly Associate .Rtf Freedoc

{% raw %}

	Article: Q179892
	Product(s): Microsoft Exchange
	Version(s): 3.01a,3.02,3.02a,3.03,4.0,4.01,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Internet Explorer versions 3.02, 4.0, 4.01 for Windows 95 
	- Microsoft Internet Explorer versions 3.02, 4.0, 4.01 for Windows NT 4.0 
	- Microsoft Internet Explorer versions 3.01a, 3.02a, 3.03, 4.0 for Windows 3.1 
	- Microsoft Internet Explorer versions 3.01a, 3.02a, 3.03, 4.0 for Macintosh 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience the following behavior when using the Outlook Web Access
	(OWA) client with Internet Explorer to open a Freedoc file that has an .Rtf
	extension and is located in a Microsoft Exchange Server folder:
	
	1. You are prompted to open the file or save it to disk. If you choose to open
	  it, you are prompted with the Open With dialog box in order to associate the
	  specified file extension with an application:
	
	  Click the program you want to use to open the file 'frmRoot.XXX'. If the
	  program you want is not in the list, click Other.
	
	  ...where XXX is a randomly generated file extension.
	
	2. You choose an application, such as Winword. NOTE: Do not choose the "Always
	  use this program to open this file" option. If you do, the random file
	  extension will be permanently associated with the application you selected.
	  If you choose Winword, Microsoft Word starts and you receive the following
	  error message:
	
	  Word cannot open the document.
	  Try one or more of the following:
	  - On the FIle menu, click Open to open the document.
	  - Make sure the document has a .Doc extension.
	  (D:\WIN95\TEMPORARY.DOC)
	
	3. You click OK, and the following error message appears:
	
	  The document name or path is not valid.
	  Try one or more of the following:
	  - Check the path to make sure it was typed correctly.
	  - On the File menu, click Open. Search for the file using the dialog
	  box.
	  (FILES\CACHE\FRMROOT.XXX)
	
	  ...where XXX is a randomly generated file extension. If you click OK, a blank
	  document opens in Microsoft Word.
	
	WORKAROUND
	==========
	
	To work around this problem, open the file in Microsoft WordPad or another text
	editor. Alternatively, you can choose to save the file locally and manually add
	the .Rtf extension to the file from Windows Explorer. Then open the file from
	Microsoft Word using the File/Open menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: frmroot.asp
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbIEsearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbIENT400Search kbIE95Search kbIE310Search kbIEMacSearch kbZNotKeyword3 kbOWA550 kbIE301aMac kbIE400Mac kbIE302aWin310 kbIE303Win310 kbIE400Win310 kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE302WinNT400 kbIE400WinNT400 kbIE401WinNT400 kbExchangeActiveServComp500
	Version           : :3.01a,3.02,3.02a,3.03,4.0,4.01,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
