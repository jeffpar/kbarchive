---
layout: page
title: "Q257786: FIX: IPF in Msvbvm60.dll Showing Data Report After Modal Form"
permalink: /kb/257/Q257786/
---

## Q257786: FIX: IPF in Msvbvm60.dll Showing Data Report After Modal Form

{% raw %}

	Article: Q257786
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp4fix
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows 95, Windows 98, or Windows Me, a Visual Basic application has a
	multiple-document interface (MDI) form. Click on a menu item on the MDI form to
	show a modal form, and then unload it. Show a data report, and then unload it.
	Then, click on another menu item on the MDI form to show a modal form, unload
	it, and then show another data report. The program crashes at this point with an
	Invalid Page Fault in msvbvm60.dll. This problem only occurs in the compiled exe
	and runs as expected in the Visual Basic integrated development environment
	(IDE).
	
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
	
	1. On Windows 95, Windows 98, or Windows Me, create a new Visual Basic Standard
	  EXE project. Form1 is created by default.
	
	2. Place a Command button on Form1.
	
	3. Paste the following code into the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	    Unload Me
	  End Sub
	
	4. From the Project menu, choose Add MDI Form. MDIForm1 is added by default.
	
	5. From the Project menu, choose Properties, and change the Startup object to
	  MDIForm1.
	
	6. From the Tools menu, choose Menu Editor.
	
	7. Add the following two menu items:
	
	   - Caption: "Show Report 1" ; Name: mnufileshow1
	
	   - Caption: "Show Report 2" ; Name: mnufileshow2
	
	8. Paste the following code into the code window of MDIForm1:
	
	  Option Explicit
	
	  Private Sub mnufileshow1_Click()
	      Form1.Show vbModal
	      DataReport1.Show
	  End Sub
	
	  Private Sub mnufileshow2_Click()
	      Form1.Show vbModal
	      DataReport2.Show
	  End Sub
	
	9. From the Project menu, select Add Data Environment.
	
	10. Set the properties of the connection to use the sample database, NWIND.MDB:
	
	  a. On the Provider tab, set Provider = Microsoft Jet OLE DB Provider.
	
	  b. Click Next.
	
	  c. On the Connection tab, set the database name to NWIND.MDB.
	
	  d. Click Test Connection to make sure that you are connected to the Database.
	
	  e. Click OK.
	
	11. Add a Command button to Connection1.
	
	12. Set the properties of Command1 to use the Employees table:
	
	  a. Right-click on Command1 and select Properties.
	
	  b. On the General tab, change the Database object to Table.
	
	  c. From the Object Name combo box, select Employees.
	
	  d. Click OK.
	
	13. From the Project menu, select Add Data Report. DataReport1 is added by
	  default.
	
	14. Set the following properties for DataReport1:
	
	   - Set the MDIChild property to True.
	
	   - Set the DataSource property to DataEnvironment1.
	
	   - Set the DataMember property to Command1.
	
	15. From the Project menu, select Add Data Report. DataReport2 is added by
	  default.
	
	16. Set the following properties for DataReport2:
	
	   - Set the MDIChild property to True.
	
	   - Set the DataSource property to DataEnvironment1.
	
	   - Set the DataMember property to Command1.
	
	17. Save the project.
	
	18. From the File menu, choose Make Project1.exe.
	
	19. Go to Windows Explorer and double-click on Project1.exe.
	
	20. Click on menu item Show Report 1. Form1 is shown. Click on Command1 to close
	  it. DataReport1 is shown. Close it.
	
	21. Click on the menu item Show Report 2. Form1 is shown. Click on Command1 to
	  close it. The IPF occurs at the point.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbReportWriter kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
