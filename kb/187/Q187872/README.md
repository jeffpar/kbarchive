---
layout: page
title: "Q187872: HOWTO: Determine Jet Memory Usage with DAO MaxBufferSize"
permalink: /kb/187/Q187872/
---

## Q187872: HOWTO: Determine Jet Memory Usage with DAO MaxBufferSize

	Article: Q187872
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When developing an application that loops through a DAO Jet Recordset, it is
	possible to control the amount of memory resources that Jet will use for cache.
	The property that can effect this control is dbMaxBufferSize, which is a
	Constant of the DBEngine.SetOption method. This article explains how this memory
	cache is calculated and how setting MaxBufferSize will limit that cache size.
	
	MORE INFORMATION
	================
	
	The Jet MaxBufferSize is a registry entry in the path Jet\3.5\Engines\Jet 3.5\.
	It normally is set to zero(0). The setting of zero indicates that Jet will use a
	default algorithm to determine the maximum cache size. That algorithm is
	"(((Total RAM on machine in MB - 12MB) / 4) + 512K)". This will return a value
	equal to the number of pages that the cache size can increase. Each page is 2048
	bytes, so for a machine with at least 64MB of RAM, this algorithm will return
	approximately 14 MB. This is the maximum memory that Jet will consume from its
	startup point.
	
	This is an example of the calculation for a 64 MB machine:
	
	  (64Mb - 12Mb) / 4 + 512K
	  = 52Mb/4 + 512K
	  = 13Mb + 512K
	  = 13.5Mb
	
	Jet will not allow the "Total RAM on machine" calculated above to exceed 64. If
	the total RAM on the machine is 12 MBytes or less, then the algorithm will
	create a 512KB cache buffer.
	
	Jet will use memory for its cache until it reaches this dynamic setting if the
	MaxBufferSize registry setting is zero (0). If the MaxBufferSize registry
	setting is set at 512, for example, the cache size will be limited to 512KB.
	Once Jet exceeds the setting, it will fire off a background thread to reduce the
	memory to the point that it goes below the maximum cache size setting. The
	Visual Basic code to accomplish this is:
	
	      DBEngine.SetOption dbMaxBufferSize, 512
	
	This will set the maximum cache size to 512KB.
	
	Following is an example of a Visual Basic project that will illustrate a way to
	cause the Jet cache buffer size to increase until it hits the limit of the
	MaxBufferSize setting.
	
	You will need to create an Access MDB file named Test with a single table in it
	called Table1. Table1 will have a single field called F1 with a default datatype
	of Text.
	
	Follow these steps to create the Visual Basic Project:
	
	1. Create a new project. Form1 is created by default.
	
	2. In Project, References, reference Microsoft DAO 3.5 Object Library.
	
	3. Add a Timer control to the new Form.
	
	4. Set the Timer control Interval property to 100.
	
	5. Paste this code into the Forms General Declaration section:
	
	        Private Sub Timer1_Timer()
	            Dim Db As Database
	            '  Uncomment the following line to have control of the
	            '  JET cache memory allocation size.
	            'DBEngine.SetOption dbMaxBufferSize, 512
	
	            Set Db = DBEngine(0).OpenDatabase("test.mdb")
	            Db.Execute "Insert Into Table1 Values('test')"
	            Db.Execute "Delete From Table1 Where F1 = 'test'"
	            Db.Close
	            Set Db = Nothing
	        End Sub
	
	Windows NT 4.0 and Windows 2000 users can monitor the Jet cache memory allocation
	by going into Task Manager and viewing the Processes tab. Windows 95/98 has no
	comparable utility.
	
	Depending upon the amount of RAM, it may take a while before the Jet cache stops
	increasing with this test. On a 128MB, 300Mhz Pentium machine, it can take over
	20 minutes before the cache memory allocation hits the limit when MaxBufferSize
	was at the default setting of zero (0).
	
	REFERENCES
	==========
	
	Microsoft Jet Database Programmer's Guide, p605-606, Appendix C
	
	Additional query words: kbDSupport kbdse kbDAO kbDAO350 kbVBp500 kbVBp400 kbVBp
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
