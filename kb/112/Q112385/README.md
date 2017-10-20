---
layout: page
title: "Q112385: Text Output Using CScrollView Derivative"
permalink: /kb/112/Q112385/
---

## Q112385: Text Output Using CScrollView Derivative

{% raw %}

	Article: Q112385
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMFC KbUIDesign kbVC kbWndw kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TEXT sample demonstrates how to display and print text using a CScrollView
	derived class. It is possible to implement text output in a CScrollView class by
	overriding OnDraw and drawing the entire document using TextOut. However,
	further steps are required to draw the text efficiently and to include support
	for multipage documents. Here are the features implemented in this sample and
	the locations:
	
	Feature                                        Locations(s)
	-------                                        ------------
	
	Calculation of various metrics necessary       METRICS.CPP:
	for text output:                               CViewMetrics::Compute
	
	Optimized screen and printer output for        TEXTVIEW.CPP:
	multipage documents:                           OnDraw (two overrides)
	                                              OnPrint
	                                              ComputeVisibleLines
	                                              ComputePrintableLines
	
	Calculation of page count:                     METRICS.CPP:
	                                              CPageMetrics::Compute
	
	Visual indication of pagination:               METRICS.CPP (Calculation)
	                                              CPageMetrics::IsPageBreak
	
	                                              TEXTVIEW.CPP (Display)
	                                              OnDraw
	                                              DrawPageBreak
	
	User-defined margins:                          METRICS.CPP (Calculation)
	                                              CMargins::Compute
	
	                                              METRICS.CPP (Validation)
	                                              CMargins::IsInvalid
	
	                                              TEXTVIEW.CPP (Display)
	                                              OnPrint
	
	Loading text files into a document:            TEXTDOC.CPP
	                                              OnOpenDocument
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Text.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: mfc text output print preview
	
	======================================================================
	Keywords          : kbfile kbsample kbMFC KbUIDesign kbVC kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	
	=============================================================================
	

{% endraw %}
