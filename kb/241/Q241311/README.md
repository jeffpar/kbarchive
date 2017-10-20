---
layout: page
title: "Q241311: Text After Embedded Object May Be Printed with Blank Characters"
permalink: /kb/241/Q241311/
---

## Q241311: Text After Embedded Object May Be Printed with Blank Characters

{% raw %}

	Article: Q241311
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a PostScript printer using fonts that are configured to
	download as soft fonts in the printer driver's Font Substitution table, text
	following an embedded object in a document may be printed incorrectly. Spaces
	may be substituted for some, but not all, characters.
	
	For example, the text "This is a test" may be printed as "Thi_ i_ a te_t" (where
	underscores represent blank spaces.)
	
	CAUSE
	=====
	
	In some circumstances, with some soft fonts and some font sizes, the printer's
	soft font cache may be flushed when you print an embedded object that uses the
	same soft fonts as the text part of the document.
	
	When this behavior occurs, the PostScript driver may reload only those characters
	in the soft font that are also used in the embedded object. In text following
	the embedded object, characters that are used in that object are printed
	normally; other characters are printed as white space. In the example above, the
	letters "T," "h," "i," "a," "e," and "t" are used in the preceding embedded
	object, but the letter "s" is not.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	The PostScript driver has been modified to reload soft fonts correctly following
	the printing of an embedded object.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
