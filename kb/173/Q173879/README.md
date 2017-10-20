---
layout: page
title: "Q173879: HOWTO: Importing an Access Table into FoxPro for the Mac"
permalink: /kb/173/Q173879/
---

## Q173879: HOWTO: Importing an Access Table into FoxPro for the Mac

{% raw %}

	Article: Q173879
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often, you have information in an Access table that needs to be imported into a
	FoxPro 2.x for the Macintosh or Visual FoxPro 3.0b for the Macintosh table.
	However, neither version of FoxPro offers a command that directly imports an
	Access table into a .dbf file nor is there a Macintosh-based ODBC driver
	available to read the Access data. This article provides several methods of
	accomplishing this task.
	
	MORE INFORMATION
	================
	
	Since neither Visual FoxPro 3.0b for the Macintosh or FoxPro 2.x for the
	Macintosh has a method of importing Access tables, you must use the
	functionality of Access to create the .dbf table. Since Access is a Windows
	product, this article assumes the user has access to a Windows 95 or Windows NT
	machine.
	
	The first method assumes that you have Visual FoxPro 3.x or 5.x for Windows.
	Since both versions of Visual FoxPro for Windows have ODBC drivers that
	interface with Access tables, one can create a remote view within Visual FoxPro
	to read the Access data and then save it to a .dbf file. The second method uses
	Access to save the file in a .dbf format. This method does not require one to
	install Visual FoxPro 3.x or 5.x for Windows.
	
	First Method
	------------
	
	1. Create a new database called Ztest in Visual FoxPro 3.x or 5.x.
	
	2. In the database, right-click and select New Remote View.
	
	3. Select New View and then click Available data sources.
	
	4. Select the proper Access driver from the list. In this case, Access 7.0
	  database and click OK.
	
	5. If Microsoft Office 97 is installed, open the employee table contained in the
	  Northwind.mdb (an Access database container) located in the program
	  Files\Microsoft Office\Office\Samples folder. The exact path on a machine
	  depends on the location of Microsoft Office.
	
	6. After adding the Employees table, click Close.
	
	7. Add the necessary fields using the Fields tab and execute the view.
	
	8. Once the view returns the data, press the CTRL and F2 keys simultaneously to
	  invoke the Command window and type the following:
	
	        COPY TO HOME()+"Temp.dbf"
	
	9. In the Command window type the following (without the quotation marks):
	
	        "USE ?"
	
	  Navigate to the Visual FoxPro home directory and locate Temp.dbf and select
	  it.
	
	10. Type "BROWSE" (without quotation marks) in the Command window to see the
	  Visual FoxPro table. Now copy the file to a disk or place it in a device
	  that both a Windows and a Macintosh machine can access. Finally, copy the
	  file to the appropriate folder on the Macintosh.
	
	Second Method
	-------------
	
	1. Start Microsoft Access 97.
	
	2. Open the Access table that needs to be converted to a FoxPro table.
	
	3. From the File menu, select Save As/Export.
	
	4. Select "To an external database" and click OK.
	
	5. In the Save as Type list box, select either Microsoft FoxPro 2.6 (*.DBF) or
	  Microsoft FoxPro 3.0 (*.DBF) and save the file.
	
	6. Place the new .dbf file on a disk or a device that is readable by a Macintosh
	  machine. Copy the file to the desired Macintosh folder and open the file with
	  FoxPro.
	
	REFERENCES
	==========
	
	Access Online Help
	
	Additional query words: Access
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
