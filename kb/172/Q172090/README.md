---
layout: page
title: "Q172090: ODE97: Filter By Form Not Available in Run-Time Applications"
permalink: kb/172/Q172090/
---

## Q172090: ODE97: Filter By Form Not Available in Run-Time Applications

	Article: Q172090
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you try to open a form in Filter-by-Form view programmatically in a
	Microsoft Access 97 run-time application, you may receive the following error
	message
	
	  Run-time error '2501': The RunCommand action was canceled.
	
	followed by:
	
	  Execution of this application has stopped due to a run-time error. The
	  application can't continue and will be shut down.
	
	CAUSE
	=====
	
	The Filter-by-Form commands are unavailable in a Microsoft Access 97 run-time
	application.
	
	RESOLUTION
	==========
	
	For more information about simulating Filter-by-Form in a run-time application,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q166634 ACC97: Filter-by-Form Example for Run-Time Apps Available in Download
	  Center
	
	MORE INFORMATION
	================
	
	In Microsoft Access 7.0, Filter-by-Form works in both the full version and the
	run-time version. However, the Filter-by-Form functionality wasn't designed to
	be available in a Microsoft Access 7.0 run-time application.
	
	Steps to Reproduce Behavior
	---------------------------
	
	CAUTION: Following these steps will modify the sample database Northwind.mdb. You
	may want to back up the Northwind.mdb file and perform these steps on a copy of
	the database.
	
	1. Open the sample database Northwind.mdb, and open the Customers form in Design
	  view.
	
	2. Add a command button to the form.
	
	3. Change the Name property for the command button to btnFilter.
	
	4. Place the following code in the OnClick event procedure of the command
	  button:
	
	        Private Sub btnFilter_Click()
	           DoCmd.RunCommand acCmdFilterByForm
	        End Sub
	
	5. Close and save the form.
	
	6. On the Tools menu, click Startup.
	
	7. Under Display Form, select Customers from the list, and then click OK.
	
	8. On the Start menu, click Run, and then type the following command.
	
	  NOTE: In the following sample, an underscore (_) at the end of a line is used
	  as a line-continuation character. Remove the underscore from the end of the
	  line when typing this command.
	
	  NOTE: In the following sample, replace C:\Program Files\Microsoft
	  Office\Office\ with the path to where Msaccess.exe is located on your hard
	  drive.
	
	     "C:\Program Files\Microsoft Office\Office\Msaccess.exe" _
	     "C:\Program Files\Microsoft Office\Office\Samples\Northwind.mdb" _
	     /Runtime
	
	9. When the Customers form opens, click the button that you created in step 2.
	
	  Note that the filter-by-form view does not come up, and you receive the errors
	  listed in the "Symptoms" section.
	
	Additional query words: ODE Raid Sweep run time error 2501
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
