---
layout: page
title: "Q246067: Sorting a Scripting Dictionary Populated with String Data"
permalink: kb/246/Q246067/
---

## Q246067: Sorting a Scripting Dictionary Populated with String Data

	Article: Q246067
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Scripting Dictionary object is the equivalent of a PERL associative array,
	where information is stored in an array consisting of unique keys and item data.
	Because this information is stored unsorted, enumerating through the array
	returns information in the order it was stored. The purpose of this article is
	to define the SortDictionary() function that sorts the contents of a dictionary
	object populated with string data by key or item.
	
	MORE INFORMATION
	================
	
	The following code example defines two constants, dictKey and dictItem, which
	are used by the SortDictionary() function. The SortDictionary() function takes
	two parameters, an object previously created as a scripting dictionary and one
	of the constants to determine whether to sort by the dictionary's keys or
	items.
	
	  Const dictKey  = 1
	  Const dictItem = 2
	
	  Function SortDictionary(objDict,intSort)
	    ' declare our variables
	    Dim strDict()
	    Dim objKey
	    Dim strKey,strItem
	    Dim X,Y,Z
	
	    ' get the dictionary count
	    Z = objDict.Count
	
	    ' we need more than one item to warrant sorting
	    If Z > 1 Then
	      ' create an array to store dictionary information
	      ReDim strDict(Z,2)
	      X = 0
	      ' populate the string array
	      For Each objKey In objDict
	          strDict(X,dictKey)  = CStr(objKey)
	          strDict(X,dictItem) = CStr(objDict(objKey))
	          X = X + 1
	      Next
	
	      ' perform a a shell sort of the string array
	      For X = 0 to (Z - 2)
	        For Y = X to (Z - 1)
	          If StrComp(strDict(X,intSort),strDict(Y,intSort),vbTextCompare) > 0 Then
	              strKey  = strDict(X,dictKey)
	              strItem = strDict(X,dictItem)
	              strDict(X,dictKey)  = strDict(Y,dictKey)
	              strDict(X,dictItem) = strDict(Y,dictItem)
	              strDict(Y,dictKey)  = strKey
	              strDict(Y,dictItem) = strItem
	          End If
	        Next
	      Next
	
	      ' erase the contents of the dictionary object
	      objDict.RemoveAll
	
	      ' repopulate the dictionary with the sorted information
	      For X = 0 to (Z - 1)
	        objDict.Add strDict(X,dictKey), strDict(X,dictItem)
	      Next
	
	    End If
	
	  End Function
	
	A Working Example:
	
	The following example makes use of the above function.
	
	Note: All comments have been removed from the actual sorting function in this
	example.
	
	Copy the following ASP code and save it to a folder as Sortdemo.asp with at least
	Scripts access:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <% Option Explicit %>
	  <html>
	  <head><title>Dictionary Sorting</title></head>
	  <body>
	  <%
	
	    Dim d, i
	
	    Const dictKey  = 1
	    Const dictItem = 2
	
	    Set d = Server.CreateObject("Scripting.Dictionary")
	
	    d.Add "3", "Delta"
	    d.Add "1", "Foxtrot"
	    d.Add "4", "Bravo"
	    d.Add "2", "Echo"
	    d.Add "6", "Alpha"
	    d.Add "5", "Charlie"
	
	    Response.Write "<p>Before Sorting:<br>"
	    For Each i In d
	      Response.Write i & "=" & d(i) & "<br>"
	    Next
	
	    Response.Write "<p>By Key:<br>"
	    SortDictionary d,dictKey
	    For Each i In d
	      Response.Write i & "=" & d(i) & "<br>"
	    Next
	
	    Response.Write "<p>By Item:<br>"
	    SortDictionary d,dictItem
	    For Each i In d
	      Response.Write d(i) & "=" & i & "<br>"
	    Next
	  %>
	  </body>
	  </html>
	  <%
	    Function SortDictionary(objDict,intSort)
	      Dim strDict()
	      Dim objKey
	      Dim strKey,strItem
	      Dim X,Y,Z
	      Z = objDict.Count
	      If Z > 1 Then
	        ReDim strDict(Z,2)
	        X = 0
	        For Each objKey In objDict
	            strDict(X,dictKey)  = CStr(objKey)
	            strDict(X,dictItem) = CStr(objDict(objKey))
	            X = X + 1
	        Next
	        For X = 0 to (Z - 2)
	          For Y = X to (Z - 1)
	            If StrComp(strDict(X,intSort),strDict(Y,intSort),vbTextCompare) > 0 Then
	                strKey  = strDict(X,dictKey)
	                strItem = strDict(X,dictItem)
	                strDict(X,dictKey)  = strDict(Y,dictKey)
	                strDict(X,dictItem) = strDict(Y,dictItem)
	                strDict(Y,dictKey)  = strKey
	                strDict(Y,dictItem) = strItem
	            End If
	          Next
	        Next
	        objDict.RemoveAll
	        For X = 0 to (Z - 1)
	          objDict.Add strDict(X,dictKey), strDict(X,dictItem)
	        Next
	      End If
	    End Function
	  %>
	
	When browsed, the following output should be displayed:
	
	  Before Sorting:
	  3=Delta
	  1=Foxtrot
	  4=Bravo
	  2=Echo
	  6=Alpha
	  5=Charlie
	
	  By Key:
	  1=Foxtrot
	  2=Echo
	  3=Delta
	  4=Bravo
	  5=Charlie
	  6=Alpha
	
	  By Item:
	  Alpha=6
	  Bravo=4
	  Charlie=5
	  Delta=3
	  Echo=2
	  Foxtrot=1
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	REFERENCES
	==========
	
	For more information on Microsoft's scripting technologies, see the Microsoft
	Developer Network Web site at the following URL:
	
	  http://msdn.microsoft.com/scripting/
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
