---
layout: page
title: "Q142839: Unloading Form from Within DBGrid Event Causes GPF"
permalink: /kb/142/Q142839/
---

## Q142839: Unloading Form from Within DBGrid Event Causes GPF

	Article: Q142839
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbDatabase
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When unloading a form from within an event of a Data Bound Grid control a
	General Protection fault will occur in VB.EXE or an Exception fault will occur
	in VB32.EXE.
	
	CAUSE
	=====
	
	The cause of the problem is that the unload event is destroying the recordset
	object of the data control. When the DBGrid gets control back the recordset
	pointer is no longer valid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, add a timer control to the form and allow the
	"Unload Me" command to happen here rather than in the DBGrid control. Here is a
	step-by-step example to correct the problem:
	
	1. Add a timer control to the form. Set its Enabled property to False and its
	  Interval property to 5.
	
	2. In the timer event of the timer control add 2 lines of code:
	
	     Timer1.Enabled = False
	     Unload Me
	
	3. In the event of the DBGrid that you wish to unload the form add this line of
	  code:
	
	     Timer1.Enabled = True
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or if it is already running, select New Project from the
	  File menu.
	
	2. Add a data control to Form1.
	
	3. Set these properties of Data1:
	
	  DatabaseName: BIBLIO.MDB
	  RecordSource: Authors
	
	4. Add a DBGrid control to the form.
	
	5. Set this single property of DBGrid1:
	
	  DataSource: Data1
	
	6. Add this line of code to the Click event of the DBGrid control:
	
	     Private Sub DBGrid1_Click()
	               Unload Me
	     End Sub
	
	7. Press F5 to run the project. Click the DBGrid. You will now get an Unhandled
	  exception in VB32.EXE or a General Protection Fault in module DBGRID16.OCX at
	  0002:FB7F.
	
	Additional query words: 4.00 vb4win vb4all gp-f gpf gp
	
	======================================================================
	Keywords          : kbDatabase 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	
	=============================================================================
	
