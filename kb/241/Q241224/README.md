---
layout: page
title: "Q241224: WD97: Word Table Embedded in Another Document Has White Line"
permalink: /kb/241/Q241224/
---

## Q241224: WD97: Word Table Embedded in Another Document Has White Line

{% raw %}

	Article: Q241224
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a file, such as a PowerPoint presentation, that contains an
	embedded Word table with shading, you see a white horizontal line within the
	shading at some zoom values.
	
	The problem may also occur with a Word table embedded in an Excel worksheet or
	another Word document.
	
	
	CAUSE
	=====
	
	An embedded Word table is represented by a Windows metafile (WMF). Calculations
	for positions within the WMF are based on printer and display drivers. In some
	cases, the calculations of shading within a table are giving incorrect results.
	
	
	WORKAROUND
	==========
	
	To work around this problem, avoid using small values (1 pt, 2 pt, and so on)
	for the paragraph Spacing Before value.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Office 2000 SR-1/SR-1a.
	
	Additional query words: wd97 embedded table shading line horizontal white spacing
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
