---
layout: page
title: "Q185990: HOWTO: Improve Performance of Object De-allocation"
permalink: /kb/185/Q185990/
---

## Q185990: HOWTO: Improve Performance of Object De-allocation

{% raw %}

	Article: Q185990
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, object de-allocation in arrays and collections can be inefficient
	when there is a large number of objects. This article describes a technique for
	improving de-allocation performance.
	
	MORE INFORMATION
	================
	
	When de-allocating a large number of objects in a collection or an array,
	performance of the de-allocation process can be improved if objects are
	de-allocated in the reverse order of their creation--this results in linear
	performance. For arrays of objects this is simple; however, for collections it
	can be difficult to determine the allocation order. In this case, the following
	code provides you with good to reasonable performance:
	
	     Public Sub DeallocCollection(colSource as Collection)
	        Dim lIndex  as Long
	        Dim lMax    as Long
	
	        lMax = colSource.Count
	        ReDim aryLocal(lMax) as object
	        For lIndex = 1 to lMax
	           if isObject(colSource.index(1)) then _
	              Set aryLocal(lIndex) = colSource.index(1)
	           colSource.Remove(1)
	        Next
	        set colSource = nothing
	
	        For lIndex = lMax to 1 step -1
	           set aryLocal(lIndex) = Nothing
	        Next
	     End Sub
	
	The performance improvement depends upon the level of fragmentation in the
	collection.
	
	Additional query words: kbDSupport kbdss VBKBObj kbVBp400 kbVBp500 kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
