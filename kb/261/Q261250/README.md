---
layout: page
title: "Q261250: HOWTO: Expose and Use ENUMS from VB Components in ASP"
permalink: /kb/261/Q261250/
---

## Q261250: HOWTO: Expose and Use ENUMS from VB Components in ASP

	Article: Q261250
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbASP kbVBp600 kbVisID600 kbGrpDSASP kbDSupport kbIIS
	Last Modified: 21-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual InterDev, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use ENUMS that are built in Visual Basic (VB)
	components in the Active Server Pages (ASP) code. This method provides an
	alternative for .inc files with CONSTANTS.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a new ActiveX DLL Visual Basic project.
	
	2. Rename Project1 to PrjEnum, and rename Class1 to ClsEnum.
	
	3. Copy the following code to ClsEnum:
	
	  Public Enum Salsa
	      Mild
	      Medium
	      Hot
	  End Enum
	
	  Public Function test(var As Salsa) As String
	      Select Case var
	          Case Mild
	              test = "Can I get a Mild Salsa"
	          Case Medium
	              test = "Can I get a Medium Salsa"
	          Case Hot
	              test = "Can I get a Hot Salsa"
	          Case Else
	              test = "No thanks!"
	      End Select
	  End Function
	
	4. Compile and make the PrjEnum.dll.
	
	5. Create a blank ASP page, copy the following code, and then save the .asp
	  page:
	
	  Note Make sure that the file path, which is referenced in the METADATA tag, is
	  correct.
	
	  <!-- METADATA TYPE="typelib" FILE="c:\MyProjects\PrjEnum\PrjEnum.dll" -->
	  <%
	  	Dim Obj
	  	Set Obj = Server.CreateObject("prjEnum.clsEnum")
	  	response.write "What kind of salsa would you like?<BR>"
	  	response.write Obj.test(Hot)
	  	set obj = NOTHING
	  %>
	
	6. In your browser, browse to the new .asp page to check the results.
	
	Additional query words: ENUM VB ASP METADATA TYPELIB TYPE
	
	======================================================================
	Keywords          : kbASP kbVBp600 kbVisID600 kbGrpDSASP kbDSupport kbIIS 
	Technology        : kbVisIDsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVisID600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
