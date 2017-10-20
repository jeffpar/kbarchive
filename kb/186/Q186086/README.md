---
layout: page
title: "Q186086: HOWTO: Get a File DSN in the Connection Designer"
permalink: /kb/186/Q186086/
---

## Q186086: HOWTO: Get a File DSN in the Connection Designer

{% raw %}

	Article: Q186086
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can use the Visual FoxPro Connection Designer
	to visually setup an ODBC File (data source name) DSN.
	
	MORE INFORMATION
	================
	
	With the previous versions of FoxPro, there was not a way to select an ODBC File
	DSN, visually, from the Connection Designer. The steps below illustrate how you
	can select an ODBC File DSN from the Visual FoxPro Connection Designer:
	
	1. Use the ODBC Manager to create a "File DSN" Data Source.
	
	2. Run Visual FoxPro and open a database.
	
	3. From the File menu, select New. In the New dialog box, select Connection and
	  then choose New File. This opens the Connection Designer.
	
	4. In the Connection Designer, under the "Specify Data Source" section, select
	  the Connection string option button.
	
	5. Blank out the contents of the Connect string.
	
	6. Select the "Verify Connection..." button or click the ellipses (...) button
	  to the right of the Connectstring text box. This opens the "Select Data
	  Source" ODBC dialog box. The ODBC dialog box has the following two tabs:
	
	     File Data Source (File DSN's)
	     Machine Data Source (System DSN's)
	
	7. Select a File DSN from the "File Data Source" tab.
	
	8. After you select the OK button, a dialog may appear asking for login
	  information or a message may appear stating the connection succeeded.
	
	9. The Connection string from the File DSN is entered into the Connect string of
	  the Connection Designer.
	
	10. Save the connection and close the Connection Designer.
	
	Additional query words: vfoxwin FxtoolDbtabledes kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
