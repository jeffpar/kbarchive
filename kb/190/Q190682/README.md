---
layout: page
title: "Q190682: HOWTO: Use the Password Dialog Box Foundation Class"
permalink: /kb/190/Q190682/
---

## Q190682: HOWTO: Use the Password Dialog Box Foundation Class

{% raw %}

	Article: Q190682
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to work with the Password Dialog Box Foundation Class
	included in Visual FoxPro Windows 6.0.
	
	MORE INFORMATION
	================
	
	_login is the Password Dialog box class and it is stores in the _dialog.vcx
	class library.
	
	The properties and methods that you will need to set up a Password Dialog box
	include cFieldName, cPassword, cTable, cDBFName and the Setup method.
	
	The cTable property contains the alias name of the user password table. The
	CDBFName property contains the actual filename of the user password table with a
	qualified path. The cPassword property contains the name of the field where the
	user password is stored. The CFieldName property contains the name of the field
	storing the user name. The Setup method is to set up the RowSource for the
	username drop-down list box.
	
	Sample Code
	-----------
	
	     * The following sample code creates a table with username and
	     * password.
	
	     CREATE TABLE cust ( username C(15), cpassw C(6))
	     INSERT INTO cust (username, cpassw) VALUES ("Smith","bird")
	     INSERT INTO cust (username, cpassw) VALUES ("Tim","dog")
	     INSERT INTO cust (username, cpassw) VALUES ("Robert","mouse")
	     INSERT INTO cust (username, cpassw) VALUES ("Tina","cat")
	
	     PUBLIC passobj
	     CLOSE TABLE ALL
	
	     * Calls _login from _Dialogs and sets properties for the dialog.
	     * Adjust the path to the class library as needed.
	     passobj = NEWOBJECT("_login",HOME()+"ffc\_dialogs.vcx")
	     passobj.cDBFName = "c:\test\cust.dbf"
	     passobj.cTable = "cust"
	     passobj.cPassword = "cpassw"
	     passobj.cFieldName = "username"
	     passobj.Setup()
	     passobj.SHOW()
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "Visual FoxPro Foundation Classes" (without the
	quotation marks)
	
	Additional query words: kbFC kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
