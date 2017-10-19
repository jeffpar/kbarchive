---
layout: page
title: "Q172338: HOWTO: Use QueryPerformanceCounter to Time Code"
permalink: /kb/172/Q172338/
---

## Q172338: HOWTO: Use QueryPerformanceCounter to Time Code

	Article: Q172338
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbProgramming kbVBp400 kbVBp500 kbhowto
	Last Modified: 04-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access 2002 
	- Microsoft Access 2000 
	- Microsoft Access 97 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Excel 2002 
	- Microsoft Excel 2000 
	- Microsoft Excel 97 for Windows 
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Word 2002 
	- Microsoft Word 2000 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When timing code to identify performance bottlenecks, you want to use the
	highest resolution timer the system has to offer. This article describes how to
	use the QueryPerformanceCounter function to time application code.
	
	MORE INFORMATION
	================
	
	Several timers of differing accuracy are offered by the operating system:
	
	Function                 Units                      Resolution
	---------------------------------------------------------------------------
	Now, Time, Timer         seconds                    1 second
	GetTickCount             milliseconds               approx. 10 ms
	TimeGetTime              milliseconds               approx. 10 ms
	QueryPerformanceCounter  QueryPerformanceFrequency  same
	
	If your system supports a high-resolution counter, you can use
	QueryPerformanceCounter and QueryPerformanceFrequency to do high-resolution
	timings.
	
	The following sample code compares the various counters:
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Step-by-Step Procedures
	-----------------------
	
	1. Enter the following code into a Module. If you enter it into a class, form,
	  or report module, make the declarations Private.
	
	         Option Explicit
	
	        Declare Function QueryPerformanceCounter Lib "Kernel32" _
	                                   (X As Currency) As Boolean
	        Declare Function QueryPerformanceFrequency Lib "Kernel32" _
	                                   (X As Currency) As Boolean
	        Declare Function GetTickCount Lib "Kernel32" () As Long
	        Declare Function timeGetTime Lib "winmm.dll" () As Long
	
	        Sub Test_Timers()
	        Dim Ctr1 As Currency, Ctr2 As Currency, Freq As Currency
	        Dim Count1 As Long, Count2 As Long, Loops As Long
	        '
	        ' Time QueryPerformanceCounter
	        '
	          If QueryPerformanceCounter(Ctr1) Then
	            QueryPerformanceCounter Ctr2
	            Debug.Print "Start Value: "; Format$(Ctr1, "0.0000")
	            Debug.Print "End Value: "; Format$(Ctr2, "0.0000")
	            QueryPerformanceFrequency Freq
	            Debug.Print "QueryPerformanceCounter minimum resolution: 1/" & _
	                        Freq * 10000; " sec"
	            Debug.Print "API Overhead: "; (Ctr2 - Ctr1) / Freq; "seconds"
	          Else
	            Debug.Print "High-resolution counter not supported."
	          End If
	        '
	        ' Time GetTickCount
	        '
	          Debug.Print
	          Loops = 0
	          Count1 = GetTickCount()
	          Do
	            Count2 = GetTickCount()
	            Loops = Loops + 1
	          Loop Until Count1 <> Count2
	          Debug.Print "GetTickCount minimum resolution: "; _
	                      (Count2 - Count1); "ms"
	          Debug.Print "Took"; Loops; "loops"
	        '
	        ' Time timeGetTime
	        '
	          Debug.Print
	          Loops = 0
	          Count1 = timeGetTime()
	          Do
	            Count2 = timeGetTime()
	            Loops = Loops + 1
	          Loop Until Count1 <> Count2
	          Debug.Print "timeGetTime minimum resolution: "; _
	                      (Count2 - Count1); "ms"
	          Debug.Print "Took"; Loops; "loops"
	        End Sub
	
	2. Run the function from the Debug/Immediate window. Your output should appear
	  similar to the following:
	
	  Start Value: 3516284.3498
	  End Value: 3516284.3521
	  QueryPerformanceCounter minimum resolution: 1/1193182 sec
	  API Overhead: 1.92761875388667E-05 seconds
	
	  GetTickCount minimum resolution: 10 ms
	  Took 650 loops
	
	  timeGetTime minimum resolution: 10 ms
	  Took 1565 loops
	
	Multiple statements execute before either GetTickCount or timeGetTime record a
	change. The actual number of loops will vary depending on the background tasks
	the operating system is executing.
	
	On the other hand, QueryPerformanceCounter changes value between successive API
	calls, indicating its usefulness in high-resolution timing. The resolution in
	this case is on the order of a microsecond. Because the resolution is
	system-dependent, there are no standard units that it measures. You have to
	divide the difference by the QueryPerformanceFrequency to determine the number
	of seconds elapsed. In the case above, the overhead for just calling the API is
	about 19 microseconds. This would have to be subtracted when timing other code
	as follows:
	
	     Private Sub Time_Addition()
	     Dim Ctr1 As Currency, Ctr2 As Currency, Freq As Currency
	     Dim Overhead As Currency, A As Long, I As Long
	       QueryPerformanceFrequency Freq
	       QueryPerformanceCounter Ctr1
	       QueryPerformanceCounter Ctr2
	       Overhead = Ctr2 - Ctr1        ' determine API overhead
	       QueryPerformanceCounter Ctr1  ' time loop
	       For I = 1 To 100
	         A = A + I
	       Next I
	       QueryPerformanceCounter Ctr2
	       Debug.Print "("; Ctr1; "-"; Ctr2; "-"; Overhead; ") /"; Freq
	       Debug.Print "100 additions took";
	       Debug.Print (Ctr2 - Ctr1 - Overhead) / Freq; "seconds"
	     End Sub
	
	Sample output:
	
	  ( 3630876.6256 - 3630876.6388 - 0.0013 ) / 119.3182
	  100 additions took 9.97333181358753E-05 seconds
	
	NOTE: Because currency variables are used, the values returned are 10000 times
	smaller than the actual counters. Because the calculation of seconds involves a
	division operation, this factor is cancelled out.
	
	REFERENCES
	==========
	
	Microsoft Developer Network; topics: timeGetTime GetTickCount
	QueryPerformanceCounter QueryPerformanceFrequency
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbVBp400 kbVBp500 kbhowto 
	Technology        : kbWordSearch kbVBSearch kbExcelSearch kbAudDeveloper kbAccessSearch kbWord2000Search kbWord2000 kbWord2002 kbWord2002Search kbWord97 kbWord97Search kbZNotKeyword6 kbAccess2000 kbAccess2002 kbAccess97 kbExcel2002 kbExcel2000 kbExcel95 kbZNotKeyword2 kbVB500Search kbVB600Search kbAccess2000Search kbAccess2002Search kbVBA500Search kbVB500 kbVB600 kbExcel2000Search kbAccess97Search kbAccess95Search kbExcel95Search kbExcel97Search kbVB400Search kbExcel2002Search kbVB400 kbZNotKeyword3 kbAccess700 kbExcelWinSearch
	Version           : :2000,4.0,5.0,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
