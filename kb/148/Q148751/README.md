---
layout: page
title: "Q148751: FIX: COleDateTimeSpan Returns Incorrect Value"
permalink: kb/148/Q148751/
---

## Q148751: FIX: COleDateTimeSpan Returns Incorrect Value

	Article: Q148751
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbole kbCOMt kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COleDateTimeSpan returns an incorrect number of days when using dates earlier
	than midnight December 30, 1899. Also, adding or subtracting COleDateTimeSpan
	objects from COleDateTime objects will produce incorrect results if the
	resulting date is before midnight December 30, 1899.
	
	CAUSE
	=====
	
	COleDateTime stores a double that represents the number of days relative to
	midnight December 30, 1899 (the base date). A date prior to the base date is
	represented by a negative number. A date that falls after the base date is
	represented by a positive double value. For example, if the date is December 29,
	1899 at midnight, the value of COleDateTime is -1.0.
	
	To calculate the actual number of days between a date prior to the base date and
	the base date, add the fractional part of the COleDateTime's double variable
	instead of subtracting it. For example, December 29, 1899 at 6:00 a.m. is
	represented as -1.25. Note, it is .75 days from the base date of midnight
	December 30, 1899.
	
	The DoubleFromDate() and DateFromDouble() in OLEVAR.CPP located in the
	\Msdev\Mfc\Src directory attempt to correct for the difference with negative
	numbers as mentioned above. These functions incorrectly handle this.
	
	Sample Code
	-----------
	
	     double DoubleFromDate(DATE dt)
	     {
	
	         // No problem if it's positive.
	         if(dt >= 0)
	             return dt;
	
	         // If it's negative, must convert because negative dates not
	         // continuous (for example, -1.25 to -.75, -1.50 to -.50,
	         // -1.75 to -.25).
	         double dblWhole = modf(dt, &dt);    // dt is now a fractional part.
	         return dblWhole - dt;
	     }
	
	     DATE DateFromDouble(double dbl)
	     {
	
	       // No problem if it's positive.
	       if(dbl >= 0)
	          return dbl;
	
	       // If it's negative, must convert because negative dates not
	       // continuous (for example, -.75 to -1.25, -.50 to -1.50,
	       // -.25 to -1.75).
	       DATE dtWhole = modf(dbl, &dbl); // dbl is now a fractional part.
	       return dtWhole - dbl;
	     }
	
	Notice that the modf() function is called incorrectly. The whole number and the
	fractional portion are reversed.
	
	RESOLUTION
	==========
	
	You can use one of the following ways to work around these bugs:
	
	- Create your own COleDateTimeSpan object to handle this correctly. Use the
	  COleDateTimeSpan code in Olevar.cpp as a guide. Then you can cut and paste.
	  Unfortunately, no virtual functions exist for COleDateTimeSpan that will
	  allow you to easily correct the bug.
	
	- Write functions that will produce the same results as COleTimeSpan. See the
	  sample code in this article for a function that will calculate the number of
	  days between two given dates. The function always returns a positive number
	  of days to avoid any confusion about what negative and positive time spans
	  mean. There is also a function that allows you to add a number of days to an
	  existing COleDateTime object.
	
	STATUS
	======
	
	This bug was corrected in Visual C++, 32-bit Edition, version 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     #include <afxole.h>
	     #include <math.h>
	
	     double GetDaySpan(COleDateTime dt1, COleDateTime dt2)
	     {
	
	         // No problem if it's positive.
	         if(dt1>=0 && dt2 >= 0)
	                return fabs(dt1-dt2);
	
	         // Days from midnight December 30, 1899.
	         double Dt1SpanFromZero, Dt2SpanFromZero;
	
	         if (dt1<0)
	         {
	             double dblDt1Whole, dblDt1Fraction;
	             dblDt1Fraction=modf(dt1,&dblDt1Whole);
	             Dt1SpanFromZero=dblDt1Whole-dblDt1Fraction;
	         }
	         else
	         {
	             Dt1SpanFromZero=dt1;
	         }
	
	         if (dt2<0)
	         {
	             double dblDt2Whole,dblDt2Fraction;
	             dblDt2Fraction = modf(dt2, &dblDt2Whole);
	             Dt2SpanFromZero=dblDt2Whole-dblDt2Fraction;
	         }
	         else
	         {
	             Dt2SpanFromZero=dt2;
	         }
	
	         // Return positive number of days.
	         return fabs(Dt1SpanFromZero-Dt2SpanFromZero);
	     }
	
	     void AddDays(COleDateTime &date, double dblDays)
	     {
	         // First, normalize the negative date.
	         // Days from midnight December 30, 1899.
	         double Dt1SpanFromZero;
	
	         if (date.m_dt<0)
	         {
	             double dblDt1Whole, dblDt1Fraction;
	             dblDt1Fraction=modf(date.m_dt,&dblDt1Whole);
	             Dt1SpanFromZero=dblDt1Whole-dblDt1Fraction;
	         }
	         else
	         {
	             Dt1SpanFromZero = date.m_dt;
	         }
	
	          date.m_dt = Dt1SpanFromZero + dblDays;
	
	          if (date.m_dt>=0)
	                   return;
	
	          // Date before midnight December 30, 1899.
	          // You need to correct the date by changing the fractional portion.
	
	          double dblWhole, dblFraction;
	          dblFraction=modf(date,&dblWhole);
	          date.m_dt=dblWhole -  ( 2 + dblFraction);
	          // Add 1 to make the fraction positive.
	          // Add 1 more to increase the whole part by one.
	          // For example, it converts a span of  -1.75 (which is -1 - .75 )
	          // to -2.25 ( which is -2 + .25 )
	
	     }
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbCOMt kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
