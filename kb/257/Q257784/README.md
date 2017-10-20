---
layout: page
title: "Q257784: FIX: ARROW Key Doesn't Work with DBCS on Japanese Windows"
permalink: /kb/257/Q257784/
---

## Q257784: FIX: ARROW Key Doesn't Work with DBCS on Japanese Windows

{% raw %}

	Article: Q257784
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DBGrid control on a Microsoft Windows 95 or Microsoft Windows
	98 Japanese edition, the ARROW key is not recognized in certain instances. If
	the cell contains double-byte characters, the ARROW key is not recognized. If
	the cell contains single-byte characters, the ARROW key is recognized and your
	application responds to this event.
	
	RESOLUTION
	==========
	
	There is currently no known workaround.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 6.0 and create a Standard EXE project. Form1 is created by
	  default.
	
	2. Place a DataGrid control on the form, such as DataGrid1.
	
	3. Place an ADO Data control on the form (Adodc1).
	
	4. Set Adodc1.CommandType to 2 (adCmdTable).
	
	5. Set Adodc1.ConnectionString to Provider=Microsoft.JET.OLEDB.4.0;Data
	  Source=C:\Program Files\Microsoft Visual Studio\VB98\Biblio.mdb.
	
	6. Set Adodc1.RecordSource to Authors.
	
	7. Set DataGrid1.DataSource to Adodc1.
	
	8. Run the program and click to select any cell, and put a double-byte string in
	  that cell.
	
	9. Move the cells around by using the ARROW key.
	
	10. Note that the ARROW key (CURSOR key) works fine on cells that contain only
	  single-byte characters, but does not work on cells that contain any
	  double-byte characters.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
