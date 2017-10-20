---
layout: page
title: "Q286755: How to Create an Index on a Custom Property"
permalink: /kb/286/Q286755/
---

## Q286755: How to Create an Index on a Custom Property

{% raw %}

	Article: Q286755
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Collaboration Data Objects for Exchange 2000, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use ActiveX Data Objects (ADO) to create a
	custom property that is indexed.
	
	MORE INFORMATION
	================
	
	This Visual Basic sample demonstrates the following tasks:
	
	- It sets the property definition urn:schemas-microsoft-com:exch-data:isindexed
	  to TRUE. (Note that this setting alone does not create the index.) The code
	  that follows the comment "Create the property definition in the schema folder
	  for title" indicates how to do this.
	
	- It defines a content class that includes the custom property. The code below
	  the comment "Create the content class recipe" indicates how to do this.
	
	- It includes that content class in a folder?s expected content class. This
	  folder is typically the application folder containing the items that hold
	  your data. The code that follows the comment "Setting the expected content
	  class for the application folder (myapp)" indicates how to do this.
	
	- It uses CREATE INDEX to create indexes on all properties that are defined in
	  the folder?s expected content class. (This function indexes all items in a
	  folder rather than individually.) The code that follows the comment "Create
	  indexes on all properties that are defined in the folder?s expected content
	  class" indicates how to do this.
	
	To run this sample code, follow these steps:
	
	- Create a folder named Myapp in the default public folder subtree, and a
	  subfolder of Myapp named Schema.
	
	- Reference the Active DS Type Library and the Microsoft ActiveX Data Objects
	  2.5 Library.
	
	- Copy the following code to a Visual Basic module:
	
	  Const adModeReadWrite = 3
	  Const adFailIfNotExists = -1
	  Const adCreateNonCollection = 0
	
	  Private Sub Main()
	   Dim Conn
	   Dim Info
	   Dim InfoNT
	   Dim sFolderURL
	   Dim sSchemaFolderURL
	
	   Set Info = CreateObject("ADSystemInfo")
	   Set InfoNT = CreateObject("WinNTSystemInfo")
	
	   ' Path of Virtual Root.
	   sVrootURL = "http://" & InfoNT.ComputerName & "." & Info.DomainDNSName & "/public"
	
	   ' Path to the application folder.
	   sFolderURL = sVrootURL & "/myapp"
	
	   ' Path to the schema folder.
	   sSchemaFolderURL = sVrootURL & "/myapp/schema"
	
	   'This example creates an index on custom properties.
	
	  ' The following property definitions are created:
	  ' urn:schemas-domain-tld:title
	  ' urn:schemas-domain-tld:ingredients
	  '
	  ' These properties are used in the ' urn:schemas-domain-tld:content-classes:recipe
	  ' content class.
	  '
	  ' A URN scheme is used for the namespace: "urn:schemas-domain-tld:"
	  ' where "tld" refers to "top-level domain".
	
	  Set Conn = CreateObject("ADODB.Connection")
	  Conn.Provider = "ExOLEDB.DataSource"
	  Conn.Open sSchemaFolderURL
	
	  Dim Rec
	  Set Rec = CreateObject("ADODB.Record")
	
	  ' Create the property definition in the schema folder for title.
	  ' This property will be the indexed property; note that 
	  ' urn:schemas-microsoft-com:exch-data:isindexed is set to True.
	  Rec.Open sSchemaFolderURL & "/title", Conn, adModeReadWrite, adCreateNonCollection
	  Set Flds = Rec.Fields
	   With Flds
	     .Item("DAV:contentclass") = "urn:content-classes:propertydef"
	     .Item("urn:schemas-microsoft-com:xml-data#name") = "urn:schemas-domain-tld:title"
	     .Item("urn:schemas-microsoft-com:datatypes#type") = "string"
	     .Item("urn:schemas-microsoft-com:exch-data:ismultivalued") = False
	     .Item("urn:schemas-microsoft-com:exch-data:isindexed") = True
	     .Item("urn:schemas-microsoft-com:exch-data:isreadonly") = False
	     .Update
	    End With
	   
	   Rec.Close
	
	   ' Create the property definition in the schema folder for ingredients.
	   Rec.Open sSchemaFolderURL & "/ingredients", Conn, adModeReadWrite, adCreateNonCollection
	   Set Flds = Rec.Fields
	    With Flds
	     .Item("DAV:contentclass") = "urn:content-classes:propertydef"
	     .Item("urn:schemas-microsoft-com:xml-data#name") = "urn:schemas-domain-tld:ingredients"
	     .Item("urn:schemas-microsoft-com:datatypes#type") = "string"
	     .Item("urn:schemas-microsoft-com:exch-data:ismultivalued") = True
	     .Item("urn:schemas-microsoft-com:exch-data:isindexed") = False
	     .Item("urn:schemas-microsoft-com:exch-data:isreadonly") = False
	     .Update
	    End With
	   Rec.Close
	
	  ' Create the content class recipe.
	  Rec.Open sSchemaFolderURL & "/ccdef-recipe", Conn, adModeReadWrite, adCreateNonCollection
	
	  Set Flds = Rec.Fields
	   With Flds
	      ' Name the content class.
	      .Item("urn:schemas-microsoft-com:xml-data#name").Value = _
	       "urn:schemas-domain-tld:content-classes:recipe"
	      ' The content class of the definition item.
	      .Item("DAV:contentclass") = "urn:content-classes:contentclassdef"
	      ' The content classes it extends (inherits from).
	      .Item("urn:schemas-microsoft-com:xml-data#extends").Value = _
	          Array("urn:content-classes:item")
	      ' The additional properties that belong to this content class.
	      .Item("urn:schemas-microsoft-com:xml-data#element").Value = _
	      Array("urn:schemas-domain-tld:title", "urn:schemas-domain-tld:ingredients")
	      .Update
	   End With
	
	  Rec.Close
	  Conn.Close
	
	  ' Set properties on the application folder.
	  Conn.Open sFolderURL
	
	  Rec.Open sFolderURL, Conn, adModeReadWrite
	
	  Set Flds = Rec.Fields
	   With Flds
	      .Item("urn:schemas-microsoft-com:exch-data:schema-collection-ref") = sSchemaFolderURL
	      'Setting the expected content class for the application folder (myapp)
	      .Item("urn:schemas-microsoft-com:exch-data:expected-content-class") = _
	     Array("urn:schemas-domain-tld:content-classes:recipe")
	      .Update
	   End With
	   
	  Rec.Close
	
	  ' Set baseschema property on the schema folder.
	  Rec.Open sSchemaFolderURL, Conn, adModeReadWrite
	
	  Set Flds = Rec.Fields
	   With Flds
	      .Item("urn:schemas-microsoft-com:exch-data:baseschema") = Array(CStr("/public/non_ipm_subtree/Schema"))
	      .Update
	   End With
	   
	  Rec.Close
	
	  ' Create indexes on all properties that are defined in the folder?s expected content class.
	  Conn.Execute "CREATE INDEX * ON """ & sFolderURL & """ (*)"
	
	  ' Create an item in the application folder using these custom properties.
	  Rec.Open sFolderURL & "/test1.txt", Conn, adModeReadWrite, adCreateNonCollection Or adCreateOverwrite
	
	  Set Flds = Rec.Fields
	   With Flds
	      .Item("urn:schemas-domain-tld:title").Value = "Title of Recipe"
	      .Item("urn:schemas-domain-tld:ingredients").Value = Array("ingredient1", "ingredient2", "ingredient3")
	      .Item("DAV:contentclass") = "urn:schemas-domain-tld:content-classes:recipe"
	      .Update
	  End With
	
	  Rec.Close
	  Conn.Close
	
	  End Sub
	
	Additional query words: Property Index
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbVBSearch kbAudDeveloper kbCDOsearch kbADOsearch kbADO250 kbADO260 kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbVB600Search kbVB600 kbExchange2000Search kbCDO600Exch2000 kbExchange2000Serv
	Version           : :2.5,2.6,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
