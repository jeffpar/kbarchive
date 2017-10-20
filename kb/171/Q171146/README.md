---
layout: page
title: "Q171146: HOWTO: Create and Remove a DSN in Visual Basic"
permalink: /kb/171/Q171146/
---

## Q171146: HOWTO: Create and Remove a DSN in Visual Basic

{% raw %}

	Article: Q171146
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVBDB kbDSupport
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the 32-bit version of Visual Basic 4.0, it is possible to use DSN-less
	connections, but because the 16-bit version of ODBC can not handle this syntax,
	it is not possible to do this in the 16-bit version of Visual Basic 4.0. It is
	possible to emulate this ability by dynamically creating and removing a Data
	Source Name (DSN) on the fly using the SQLConfigDataSource ODBC API call.
	
	The following is a 16-and 32-bit example that demonstrates this technique. The
	32-bit code was included because this technique has other uses as described
	below. The 32-bit techniques presented in this article also apply to Visual
	Basic 5.0.
	
	MORE INFORMATION
	================
	
	The 32-bit ODBC ability to use a DSN-less connection has many uses:
	
	1. Client Simplicity. The user does not have to worry about setting up a DSN,
	  naming it correctly, setting up options, etc. All this can be done
	  dynamically by the application.
	
	2. It solves many JET engine connection and connect string caching issues.
	
	3. Increases the flexibility of the application.
	
	All of these uses can be realized in 16-bit ODBC by creating and deleting a DSN
	on the fly. This method is also useful for simple DSN management. The code could
	be used to automatically create, modify, or delete a DSN at any time. Visual
	Basic does provide the ability to create a DSN using the
	DBEngine.RegisterDatabase() method, but the API provides greater functionality
	and the ability to modify and remove a DSN, as well.
	
	Step-by-Step Example
	--------------------
	
	1. Start a New Project.
	
	2. In the Advanced tab of the Options dialog box under the Tools menu, set a
	  Conditional Compilation Argument named WIN32 equal to 1 if using Visual Basic
	  4.0 32-bit, or 0 if using Visual Basic 4.0 16-bit.
	
	3. Add two CommandButtons to the default form.
	
	4. Add the following code to the General Declarations:
	
	        Option Explicit
	
	        'Constant Declaration
	        Private Const ODBC_ADD_DSN = 1        ' Add data source
	        Private Const ODBC_CONFIG_DSN = 2     ' Configure (edit) data source
	        Private Const ODBC_REMOVE_DSN = 3     ' Remove data source
	        Private Const vbAPINull As Long = 0&  ' NULL Pointer
	
	        'Function Declare
	        #If WIN32 Then
	
	            Private Declare Function SQLConfigDataSource Lib "ODBCCP32.DLL" _
	            (ByVal hwndParent As Long, ByVal fRequest As Long, _
	            ByVal lpszDriver As String, ByVal lpszAttributes As String) _
	            As Long
	        #Else
	            Private Declare Function SQLConfigDataSource Lib "ODBCINST.DLL" _
	            (ByVal hwndParent As Integer, ByVal fRequest As Integer, ByVal _
	            lpszDriver As String, ByVal lpszAttributes As String) As Integer
	        #End If
	
	5. Add the following code into the Click event of Command1:
	
	        #If WIN32 Then
	            Dim intRet As Long
	        #Else
	            Dim intRet As Integer
	        #End If
	        Dim strDriver As String
	        Dim strAttributes As String
	
	        'Set the driver to SQL Server because it is most common.
	        strDriver = "SQL Server"
	        'Set the attributes delimited by null.
	        'See driver documentation for a complete
	        'list of supported attributes.
	        strAttributes = "SERVER=SomeServer" & Chr$(0)
	        strAttributes = strAttributes & "DESCRIPTION=Temp DSN" & Chr$(0)
	        strAttributes = strAttributes & "DSN=DSN_TEMP" & Chr$(0)
	        strAttributes = strAttributes & "DATABASE=pubs" & Chr$(0)
	        'To show dialog, use Form1.Hwnd instead of vbAPINull.
	        intRet = SQLConfigDataSource(vbAPINull, ODBC_ADD_DSN, _
	        strDriver, strAttributes)
	        If intRet Then
	            MsgBox "DSN Created"
	        Else
	            MsgBox "Create Failed"
	        End If
	
	6. Add the following code into the Click event of Command2:
	
	        #If WIN32 Then
	            Dim intRet As Long
	        #Else
	            Dim intRet As Integer
	        #End If
	        Dim strDriver As String
	        Dim strAttributes As String
	
	        'Set the driver to SQL Server because most common.
	        strDriver = "SQL Server"
	        'Set the attributes delimited by null.
	        'See driver documentation for a complete list of attributes.
	        strAttributes = "DSN=DSN_TEMP" & Chr$(0)
	        'To show dialog, use Form1.Hwnd instead of vbAPINull.
	        intRet = SQLConfigDataSource(vbAPINull, ODBC_REMOVE_DSN, _
	        strDriver, strAttributes)
	        If intRet Then
	            MsgBox "DSN Deleted"
	        Else
	            MsgBox "Delete Failed"
	        End If
	
	7. Run the project.
	
	8. Click Command1 to add a DSN named DSN_TEMP.
	
	9. Click Command2 to remove the DSN named DSN_TEMP.
	
	REFERENCES
	==========
	
	ODBC 2.0 Programmer's Reference and SDK Guide
	Microsoft Press 1993
	ISBN 1-55615-658-8
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Troy
	Cambra, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
