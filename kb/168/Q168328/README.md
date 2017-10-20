---
layout: page
title: "Q168328: PPT7: Error Inserting or Clicking Excel Object in PowerPoint"
permalink: /kb/168/Q168328/
---

## Q168328: PPT7: Error Inserting or Clicking Excel Object in PowerPoint

{% raw %}

	Article: Q168328
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbole kbdta
	Last Modified: 03-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Excel for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft PowerPoint, when you insert or click a Microsoft Excel object, you
	may receive an error message similar to the following:
	
	  The source application is busy and can't respond immediately. You can switch
	  to the other application and try to resolve the problem.
	
	CAUSE
	=====
	
	This problem may occur if the Microsoft Excel AutoSave add-in is loaded.
	PowerPoint cannot create the object because Excel takes too much time to load
	when the AutoSave add-in is selected.
	
	NOTE: It is possible that other add-ins may also cause this problem.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Remove the AutoSave Add-In
	------------------------------------
	
	To remove the add-in, follow these steps:
	
	1. Start Microsoft Excel.
	
	2. On the Tools menu, click Add-Ins.
	
	3. Click to clear the AutoSave check box, and then click OK.
	
	If you still receive the error message after trying method 1, try method 2.
	
	Method 2: Start Microsoft Excel First
	-------------------------------------
	
	Start Excel first (before you start PowerPoint). Regardless of whether the
	AutoSave add-in is loaded, you can insert or edit Microsoft Excel objects in
	PowerPoint.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Excel for Windows 95,
	version 7.0.
	
	MORE INFORMATION
	================
	
	
	Additional query words: ppt95 ppt7 xl95 xl7 server addin add-in 7.0 95 hotfeatstat hotfixstat The source application is busy and can t respond immediately
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbole kbdta 
	Technology        : kbExcelSearch kbPowerPtSearch kbExcel700 kbPowerPt700 kbZNotKeyword2 kbExcel95Search kbPowerPt700Search
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
