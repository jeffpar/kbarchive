---
layout: page
title: "Q253555: FIX:&quot;Report Width Is Larger Than the Paper Width&quot; on Data Report"
permalink: /kb/253/Q253555/
---

## Q253555: FIX:&quot;Report Width Is Larger Than the Paper Width&quot; on Data Report

{% raw %}

	Article: Q253555
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbReportWriter kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fi
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to export a report from the Microsoft DataReport designer, you
	receive the following error message:
	
	  Report width is larger than the paper width.
	
	This error usually occurs when the report you are trying to export is laid out
	for Landscape orientation printing.
	
	CAUSE
	=====
	
	The DataReport designer expects a page size of 8.5 x 11 inches laid out in a
	Portrait orientation. Exporting the report to a text file or an HTML file in
	Landscape orientation does not work properly because of this limitation.
	
	RESOLUTION
	==========
	
	There is currently no workaround for this problem in releases prior to Visual
	Studio 6.0 Service Pack 4.
	
	This behavior no longer occurs with the version of the DataReport that ships with
	the latest service pack for Visual Studio 6.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4 pageset.dll
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbReportWriter kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
