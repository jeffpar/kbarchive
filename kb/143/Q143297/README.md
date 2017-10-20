---
layout: page
title: "Q143297: How to Use OLE Automation with Microsoft Project 4.1"
permalink: /kb/143/Q143297/
---

## Q143297: How to Use OLE Automation with Microsoft Project 4.1

{% raw %}

	Article: Q143297
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create a new project in Microsoft Project
	4.1 by using Visual FoxPro and OLE Automation.
	
	MORE INFORMATION
	================
	
	The following code sets up a Microsoft Project called Saltbox. This project
	consists of tasks necessary to build a house.
	
	Step-by-Step Example
	--------------------
	
	1. Create a table in Visual FoxPro called k2project that has the following
	  structure. This structure follows the task structure of Microsoft Project.
	
	  Field#  Name       Type
	  1. field1     - Character(10)
	  2. task_name  - Character(25)
	  3. duration   - Character(5)
	  4. start      - date
	  5. finish     - date
	  6. pred       - Character(10)
	  7. resource_n - Character(20)
	
	2. Populate the table with data. Each record consists of a task to build a
	  house. for example:
	
	  field1    = " "
	  task_name = "Build House"
	  duration  = "60d"
	  start     = 03/01/96
	  finish    = " "
	  pred      = " "
	  resource_n = "Ace Builders"
	
	  NOTE: Assign a start date to the first task only. Assign all tasks a duration.
	  For example, 30d = thirty days. Microsoft Project will calculate the finish
	  dates based upon the duration of each task.
	
	3. Enter the following code in a program file, and then run it to create a
	  project, link the tasks, and calculate the length of the project. This
	  program will print a Gantt Chart and Pert Chart.
	
	     CLEAR
	     SET SAFETY OFF
	     ON ERROR DO OLERROR
	     SET DEFAULT TO "C:\VFP Files"
	     PUBLIC x
	
	     IF FILE('Saltbox.mpp')
	       ERASE Saltbox.mpp
	       ERASE Saltbox.mpx
	     ENDIF
	
	     IF USED('k2project')
	       USE IN k2Project
	     ENDIF
	
	     USE k2project IN 0
	     * Microsoft Project will only accept FOX2 TYPE FILES
	     COPY TO xproj TYPE FOX2
	     USE IN k2project
	     Myfile = "xproj.dbf"
	
	     x=CreateObject("MSProject.Project.4_1")
	     x.application.Visible=.t.
	     x.application.FileNew
	     x.application.FileSaveAs("SaltBox")
	     * Append Entry table from Myfile
	     x.application.FileOpen(Myfile,0,1,1,'Entry')
	     x.application.SelectAll
	     * Link the tasks together
	     x.application.LinkTasks
	     x.application.AppMinimize
	
	     Myans =MessageBox("Print Gantt Chart?",4+32,"Print Report")
	     IF Myans = 6
	       x.application.FilePrint(1,4)
	     ENDIF
	
	     x.application.AppRestore
	     x.application.ViewApply("Pert Chart")
	     x.application.AppMinimize
	
	     Myans =MessageBox("Print Pert Chart?",4+32,"Print Report")
	     IF Myans = 6
	       x.application.FilePrint(1,2)
	     ENDIF
	
	     x.application.ViewApply("Gantt Chart")
	     x.application.FileSave
	     x.application.FileQuit
	
	     RELEASE x
	     RETURN
	
	     PROCEDURE OLERROR
	     ON ERROR
	     WAIT WINDOW "An error occurred!"
	     =AERROR(myerror)
	     CLEAR
	     ? 'The error provided the following information'  && Display message
	     FOR n = 1 TO 7  && Display all elements of the array
	      ? myerror(n)
	     ENDFOR
	
	     IF TYPE("X") = "O"
	       x.application.Quit
	       RELEASE X
	       CANCEL
	     ENDIF
	     RETURN
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
