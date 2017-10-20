---
layout: page
title: "Q155088: BUG: ListBox Control Scrolls Slowly"
permalink: /kb/155/Q155088/
---

## Q155088: BUG: ListBox Control Scrolls Slowly

{% raw %}

	Article: Q155088
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300bBUG
	Last Modified: 17-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When scrolling with the scroll bar in the ListBox control of Visual FoxPro, the
	scrolling speed is unreasonably slow. The Visual FoxPro ListBox may be many
	times slower than the @...GET-List of version 2.6. The scrolling speed of the
	ListBox is not dependent on the RowSourceType of the control or the size of the
	data set being scrolled.
	
	WORKAROUND
	==========
	
	Do one of the following to workaround this behavior:
	
	- Recreate a ListBox-like object by subclassing a grid with the following
	  properties:
	
	  ColumnCount = 1
	  DeleteMark = .F.
	  RecordMark = .F.
	  ScrollBars = 2 - Vertical
	  HeaderHeight = 0
	  GridLines = 0 - None
	  RowHeight = FontSize + 2
	
	  The result will be similar in function to a ListBox and will scroll
	  considerably faster with the scroll bar. However, if you are using repeated
	  arrow keys to scroll, the grid is slower than the ListBox.
	
	  One limitation of this approach is the limited selection of RecordSourceTypes
	  of the grid as compared to the RowSourcetypes of the ListBox. The following
	  tables illustrate this:
	
	  Grid RecordSourceTypes:
	
	  0 - Table
	  1 - Alias
	  2 - Prompt
	  3 - Query (.QPR)
	
	  ListBox RowSourceTypes:
	
	  0 - None
	  1 - Value
	  2 - Alias
	  3 - SQL Statement
	  4 - Query (.QPR)
	  5 - Array
	  6 - Fields
	  7 - Files
	  8 - Structure
	  9 - Popup
	
	- Define and activate a POPUP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following table illustrates the difference in scrolling speed. The test case
	used a ListBox sized to show 10 rows and populated with the company field from a
	customer table in the Visual FoxPro:Samples:Data folder. The customer table
	contains 91 records. The Time column reflects the time necessary to scroll via
	the down arrow from top to bottom:
	
	  Machine              Product                  Time     Rate (r/s)
	  -------------------- ---------------------    -------- ----------
	
	  Power Mac 9500/132   Visual FoxPro/Mac 3.0     5.5      16.5
	  Power Mac 9500/132   FoxPro/Mac 2.6            0.9     102.0
	  Power Mac 7100/66    Visual FoxPro/Mac 3.0    26.0       3.5
	  Power Mac 7100/66    FoxPro/Mac 2.6            2.8      32.5
	  GateWay Pentium120   Visual FoxPro/Win 3.0     0.8     115.0
	
	  Machine Details:
	
	  - Power Mac 9500/132 32MB, VM 40MB, 7.5.3, ATI XClaim GA 4MB-
	    1024x768xMillions
	
	  - Power Mac 7100/66 AV 16MB, 24MB VM, 864x624xThousands
	
	  - GateWay Pentium120, Windows NT Server 3.51,SP3, 32MB, 44 MB Swap,
	    ATI PCI Video 2MB-1024x768x256
	
	Additional query words: speed crawl redraw performance
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300bBUG 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
