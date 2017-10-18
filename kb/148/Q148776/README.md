---
layout: page
title: "Q148776: How to Use the New API Functions in Visual FoxPro Version 3.0b"
permalink: kb/148/Q148776/
---

## Q148776: How to Use the New API Functions in Visual FoxPro Version 3.0b

	Article: Q148776
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The update release of Visual FoxPro version 3.0b included a number of new Object
	manipulation API functions:
	
	     _FreeObject()
	     _GetObjectProperty()
	     _SetObjectProperty()
	     _ObjectCmp()
	     _ObjectReference()
	     _ObjectRelease()
	     _WGetObjectClientWindow()
	     _WGetObjectWindow()
	
	This article gives a brief description of each of these functions followed by
	sample code that shows how to call and implement each one.
	
	MORE INFORMATION
	================
	
	Brief Description of Each Function
	----------------------------------
	
	  _FreeObject() - releases an object from the Visual FoxPro API data pool.
	
	  _GetObjectProperty() - returns a property value for an object.
	
	  _ObjectCmp() - compares the properties of two objects and returns 0 if their
	  properties and property values are identical.
	
	  _ObjectReference() - Increments the reference count of an object.
	
	  _ObjectRelease() - Decrements the reference count of an object.
	
	  _SetObjectProperty() - Sets a property for an object.
	
	  _WGetObjectClientWindow() - Returns the handle of the client window in which
	  the specified object is contained.
	
	  _WGetObjectWindow() - Returns the handle of the frame window in which the
	  specified object is contained.
	
	Uses for the Functions
	----------------------
	
	The use of some of these object functions may not be immediately apparent. The
	_FreeObject(), _ObjectReference(), and _ObjectRelease() functions can be thought
	of as similar to the memory locking functions.
	
	To be sure that the object reference is valid between calls, you can call
	ObjectReference(), like _HLock, to tell Visual FoxPro not to alter this object
	in memory. Then when you're finished, you can call ObjectRelease() as you can
	call HUnLock(). To get rid of the object reference entirely, you can call
	FreeObject() in a comparable manner to FreeHand().
	
	The following sample code demonstrates an FLL that uses all of these new
	functions. There is a section of C code listed first that you can use to build
	the FLL. That section is followed by a section of FoxPro code to test the
	functionality of your new FLL.
	
	C Source Code for FLL
	---------------------
	
	Build the following code as you would for any other FLL. If you need help, see
	the Professional Features Guide Chapter 11 and the Microsoft Knowledge Base.
	
	  // Following is the C code to create a single FLL that
	  // showcases how to call each of the new object functions.
	
	  // include the library construction header file
	  #include <pro_ext.h>
	
	  far changeWTitle (ParamBlk FAR *parm)
	  {
	    WHandle wh;
	    if (parm->p[0].val.ev_type=='O')
	    {
	       wh=_WGetObjectWindow(&parm->p[0].val);
	     _WSetTitle(wh, "Changed Title");
	    }
	    return(0);
	  }
	
	  far getoTop(ParamBlk FAR *parm)
	  {
	    Value val;
	
	    _MemFill(&val, 0, sizeof(Value));   // Clear out our return value
	    val.ev_length = 0;         // Assume a bad return.
	
	   if (parm->p[0].val.ev_type == 'O')
	   {
	       _GetObjectProperty(&val, &parm->p[0].val, "TOP");
	   }
	   _RetVal(&val);
	   return(0);
	  }
	
	  far changeoTop(ParamBlk FAR *parm)
	  {
	    Value val;
	    int   status;
	
	    _MemFill(&val, 0, sizeof(Value));   // Clear out return value
	    val.ev_type = 'L';
	    val.ev_length = 0;         // Assume a bad return
	
	   if (parm->p[0].val.ev_type == 'O')
	   {
	       if (!(status= _SetObjectProperty(&parm->p[0].val,
	          "TOP", &parm->p[1].val, 0)))
	     val.ev_length = 1;      // succeeded
	   }
	   _RetVal(&val);
	   return(0);
	  }
	
	  far compare(ParamBlk FAR *parm)
	  {
	
	   if (parm->p[0].val.ev_type == 'O' && parm->p[1].val.ev_type == 'O')
	   {
	
	       _RetInt((long) _ObjectCmp(&parm->p[0].val, &parm->p[1].val),5);
	   }
	   return(0);
	  }
	
	  far changeCWTitle(ParamBlk FAR *parm)
	  {
	     WHandle   wh;
	     if (parm->p[0].val.ev_type == 'O')      // Check for 'O' as in Oscar
	     {
	        wh =  _WGetObjectClientWindow(&parm->p[0].val);
	        _WSetTitle(wh,  "Changed Title");
	     }
	   return(0);
	  }
	
	  far ofree(Value *val1)
	  {
	
	   if (val1->ev_type=='O')
	   {
	       _FreeObject(val1);
	      return(0);
	   }
	
	   return(1);
	  }
	
	  far objref(ParamBlk FAR *parm)
	  {
	  // This function shows how to keep an object reference around.
	  // You would call this with a child object. It gets a ref
	  // to the parent, increment the reference, change the
	  // value of a property, then release the ref and free the object.
	
	     Value setval,getval;
	     char returnstr[80];
	     _MemFill(&setval,0,sizeof(Value));
	     _MemFill(&getval,0,sizeof(Value));
	     setval.ev_type='I';
	     setval.ev_long=70;
	
	   if (parm->p[0].val.ev_type == 'O')
	   {
	       if (! _GetObjectProperty(&getval, &parm->p[0].val, "PARENT"))
	      {
	         _ObjectReference(&getval); //increment the Ref Count of the object
	        strcpy(returnstr,"Increment Refcount, ");
	        if (!(_SetObjectProperty(&getval, "TOP", &setval,0)))
	        {
	          strcat(returnstr,"Set the top to 70, ");
	        }
	        _ObjectRelease(&getval);
	        strcat(returnstr,"Release reference, ");
	        if (!ofree(&getval))
	        {
	           strcat(returnstr,"Freed the object\n");
	        }
	     _RetChar(returnstr);
	      }
	  }
	  return(0);
	  }
	
	  // The FoxInfo structure registers the function
	  FoxInfo myFoxInfo[] = {
	     {"CHANGEWTITLE",(FPFI) changeWTitle, 1, "O"},
	     {"OGETTOP", (FPFI) getoTop, 1, "O"},
	     {"OSETTOP", changeoTop, 2, "O?"},
	     {"CHANGECWTITLE", changeCWTitle, 1, "O"},
	     {"OCOMPARE", compare, 2, "OO"},
	     {"OMOVEPARENT",objref,1,"O"},
	  };
	
	  // the FoxTable structure
	  FoxTable _FoxTable = {
	     (FoxTable  *) 0, sizeof(myFoxInfo)/sizeof(FoxInfo), myFoxInfo
	  };
	
	FoxPro Code Component
	---------------------
	
	When you have entered the code and successfully built it into a DLL, you can save
	that file to your Visual FoxPro default directory as Newapi.fll. Then use the
	following FoxPro code to call and test the function.
	
	  SET LIBRARY TO NEWAPI.FLL
	
	  PUBLIC x
	  x=CreateObject('myform')
	  x.Show
	
	  Define Class myform as form
	     add object command1 as commandbutton
	     add object command2 as commandbutton
	     add object command3 as commandbutton
	     add object command4 as commandbutton
	     add object command5 as commandbutton
	     add object spintop as spinner
	     command1.caption="Change FrameWindow Title of _screen"
	     command2.caption="Set .TOP of this button to this value:"
	     command3.caption="Display .TOP value of the form"
	     command4.caption="Move the form and test Obj Ref"
	     command5.caption="Change Window Title of this Form"
	     spintop.value=10
	
	     proc init
	        for i=1 to thisform.controlcount-1
	           with thisform.controls(i)
	              .visible=.t.
	              if pemstatus(thisform.controls(i),'autosize',5)
	                 .autosize=.t.
	                 .autosize=.f.
	                 .width=260
	                 .left=10
	              ENDIF
	              if i>1
	                 .top=thisform.controls(i-1).height*(i-1)+10*(i-1)
	              ENDIF
	           endwith
	        endfor
	        with this
	           .spintop.top=.command2.top
	           .spintop.height=.command2.height
	           .spintop.width=50
	           .spintop.left=.command2.left+.command2.width+10
	           .spintop.value=.command2.top
	     endproc
	
	     proc command1.click
	        =changewtitle(_screen); // change the form title
	     endproc
	     proc command2.click
	        =OSetTop(this,this.parent.spintop.value)
	     endproc
	     proc command3.click
	        val=OGetTop(thisform)
	        =messagebox(str(val))
	     endproc
	     proc command4.click
	        =messagebox(OMOVEPARENT(this))
	
	     endproc
	     proc command5.click
	        =CHANGECWTITLE(thisform)
	     endproc
	
	  enddefine
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:3.0,3.0b,6.0
	
	=============================================================================
	
